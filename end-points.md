

```python
class EmailAPIView(APIView):  # type: ignore[misc]

    def post(self, request: Request) -> Response:
        email_path = request.data.get("email_path")
        if email_path is None:
            return Response(
            {"message": "no email_path"}, 
            status=status.HTTP_400_BAD_REQUEST 
            )

        df = parse_mails_to_dataframe(email_path)
        print(df.describe())
        return Response(
        {"message": "Done"}, 
        status=status.HTTP_201_CREATED
    )
    
```

```python
from django.urls import path

from .views import TestAPIView, EmailAPIView
urlpatterns = [
    path("test/", TestAPIView.as_view(), name="test"),
    path("emails/", EmailAPIView.as_view(), name="emails"),
]
```
