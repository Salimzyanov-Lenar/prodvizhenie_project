from django.urls import path
from .views import RegisterAPI, LoginAPI, InspirationImageListView, TeamCardListView, CourseDetailAPIView, CourseListAPIView, NextCourseAPIView

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    # или вы можете использовать стандартный obtain_auth_token
    # path('login/', obtain_auth_token, name='login'),
    path('inspiration-images/', InspirationImageListView.as_view(), name='inspiration-image-list'),
    path('team-card/', TeamCardListView.as_view(), name='team-card-list'),
    path('courses/<slug:audience_slug>/', CourseListAPIView.as_view(), name='course_list_api'),
    path('course/<slug:slug>/', CourseDetailAPIView.as_view(), name='course_detail_api'),
    path('course/<slug:slug>/next/<slug:audience_slug>/', NextCourseAPIView.as_view(), name='next_course_api'),
]