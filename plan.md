Mail2Knowledge MVP Frontend - Implementation Plan

 Overview

 Build a React frontend for the Mail2Knowledge system that transforms emails into structured organizational knowledge. Focus on complete workflow
 with mock data, ready for Django backend integration.

 Tech Stack: React 19, TypeScript, Vite 7, Tailwind CSS 4 (pure, no UI library)

 ---
 Folder Structure

 src/
 ├── types/
 │   ├── index.ts               # Re-export all types
 │   ├── email.ts               # Email interfaces
 │   └── knowledge.ts           # Knowledge record interfaces
 │
 ├── mock/
 │   ├── emails.ts              # Sample email data
 │   ├── knowledge-records.ts   # Extracted knowledge mock
 │   └── api.ts                 # Mock API service
 │
 ├── hooks/
 │   ├── useFileUpload.ts       # File upload logic
 │   ├── useEmailProcessing.ts  # Email parsing
 │   ├── useKnowledgeStore.ts   # State management (Context + useReducer)
 │   └── useExport.ts           # CSV/JSON export
 │
 ├── utils/
 │   ├── emailParser.ts         # Parse .eml/.txt files
 │   └── exportHelpers.ts       # CSV/JSON generation
 │
 ├── components/
 │   ├── layout/
 │   │   ├── Header.tsx
 │   │   └── MainLayout.tsx
 │   │
 │   ├── upload/
 │   │   ├── FileDropzone.tsx   # Drag-drop upload
 │   │   ├── FileList.tsx       # Uploaded files list
 │   │   └── UploadProgress.tsx
 │   │
 │   ├── knowledge/
 │   │   ├── KnowledgeTable.tsx # Main results table
 │   │   ├── KnowledgeRow.tsx
 │   │   ├── KnowledgeSummary.tsx
 │   │   └── KnowledgeFilters.tsx
 │   │
 │   ├── export/
 │   │   └── ExportButton.tsx
 │   │
 │   └── ui/
 │       ├── Button.tsx
 │       ├── Card.tsx
 │       ├── Badge.tsx
 │       ├── Spinner.tsx
 │       └── EmptyState.tsx
 │
 └── pages/
     └── Dashboard.tsx          # Main single-page view

 ---
 Key TypeScript Interfaces

 // Email types
 interface ParsedEmail {
   id: string;
   sender: string;
   senderEmail: string;
   recipients: string[];
   subject: string;
   date: string;
   bodyPlain: string;
   sourceFile: string;
   processedAt: string;
 }

 // Knowledge types
 type KnowledgeCategory = 'decision' | 'task' | 'arrangement' | 'key_info' | 'risk' | 'deadline';

 interface KnowledgeRecord {
   id: string;
   sourceEmailId: string;
   category: KnowledgeCategory;
   summary: string;
   fullContent: string;
   extractedEntities?: {
     people?: string[];
     dates?: string[];
   };
   confidence: number;
   createdAt: string;
 }

 // File upload
 interface UploadedFile {
   id: string;
   file: File;
   status: 'pending' | 'processing' | 'success' | 'error';
   errorMessage?: string;
 }

 ---
 State Management

 Use React Context + useReducer (no external libraries):

 interface AppState {
   uploadQueue: UploadedFile[];
   processingStatus: 'idle' | 'processing' | 'complete' | 'error';
   emails: ParsedEmail[];
   knowledgeRecords: KnowledgeRecord[];
   filters: {
     searchQuery: string;
     category: KnowledgeCategory | 'all';
   };
 }

 ---
 Implementation Order

 Phase 1: Foundation

 1. Create folder structure and TypeScript interfaces (src/types/)
 2. Build UI primitives: Button, Card, Badge, Spinner, EmptyState
 3. Create MainLayout and Header

 Phase 2: File Upload

 4. Build FileDropzone (drag-drop, .eml/.txt/.msg validation)
 5. Create FileList (show uploaded files with status)
 6. Implement useFileUpload hook
 7. Basic email parsing utility (client-side .eml/.txt extraction)

 Phase 3: Mock Data & Processing

 8. Set up mock data (emails.ts, knowledge-records.ts)
 9. Create mock API service (simulates Django responses)
 10. Build UploadProgress component
 11. Implement useEmailProcessing hook

 Phase 4: Knowledge Display

 12. Build KnowledgeTable (main results view)
 13. Create KnowledgeRow with category badges
 14. Add KnowledgeSummary (statistics widget)
 15. Implement KnowledgeFilters (search, category filter)

 Phase 5: Export & Integration

 16. Build ExportButton with CSV/JSON download
 17. Implement useExport hook
 18. Create Dashboard page (assemble all components)
 19. Connect state management (Context Provider)
 20. Polish: responsive design, loading states, error handling

 ---
 MVP User Flow

 1. Upload → User drops email files (.eml, .txt) into dropzone
 2. Process → System parses files, shows progress
 3. Extract → Mock API returns knowledge records (decisions, tasks, arrangements)
 4. Display → Results shown in filterable table with category badges
 5. Export → User downloads CSV or JSON

 ---
 Files to Modify/Create

 | File                    | Action                                                |
 |-------------------------|-------------------------------------------------------|
 | src/App.tsx             | Replace demo content with Dashboard                   |
 | src/index.css           | Keep Tailwind imports, add custom utilities if needed |
 | src/types/*             | Create (new)                                          |
 | src/mock/*              | Create (new)                                          |
 | src/hooks/*             | Create (new)                                          |
 | src/utils/*             | Create (new)                                          |
 | src/components/*        | Create (new)                                          |
 | src/pages/Dashboard.tsx | Create (new)                                          |

 ---
 Django Integration Points (Future)

 Mock API designed to mirror Django REST Framework:
 - POST /api/v1/emails/upload/ → Upload email files
 - GET /api/v1/processing/{jobId}/ → Get extraction results
 - POST /api/v1/export/ → Export data

 Environment variable: VITE_API_URL for backend URL