from django.urls import path,include
from . import views
from .views import RegisterApi,listOfQuestions
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views

router = DefaultRouter()
router.register('profile',listOfQuestions)


urlpatterns = [
    path('register/', RegisterApi.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('questions/', include(router.urls)),
    path('answers/', views.answers , name = "answers"),
]