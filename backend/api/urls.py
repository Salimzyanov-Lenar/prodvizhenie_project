from django.urls import path
from .views import RegisterAPI, LoginAPI, InspirationImageListView, TeamCardListView

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    # или вы можете использовать стандартный obtain_auth_token
    # path('login/', obtain_auth_token, name='login'),
    path('inspiration-images/', InspirationImageListView.as_view(), name='inspiration-image-list'),
    path('team-card/', TeamCardListView.as_view(), name='team-card-list'),
]