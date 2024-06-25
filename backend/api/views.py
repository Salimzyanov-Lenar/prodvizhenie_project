# api/views.py

from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, InspirationImageSerializer, TeamCardSerializer
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import InspirationImage, TeamCard




class RegisterAPI(APIView):
    permission_classes = [AllowAny]

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        data = request.data
        username = data.get('username', '')
        email = data.get('email', '')

        # Проверка уникальности username
        if User.objects.filter(username=username).exists():
            return Response({"username": ["Пользователь с таким именем уже существует."]}, status=status.HTTP_400_BAD_REQUEST)

        # Проверка уникальности email
        if User.objects.filter(email=email).exists():
            return Response({"email": ["Пользователь с таким email уже существует."]}, status=status.HTTP_400_BAD_REQUEST)

        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token.key
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        return Response({"message": "Send a POST request to register a new user."}, status=status.HTTP_200_OK)


class LoginAPI(APIView):
    permission_classes = [AllowAny]

    @method_decorator(csrf_exempt)
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.data['username'], password=serializer.data['password'])
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({
                    "user": UserSerializer(user).data,
                    "token": token.key
                }, status=status.HTTP_200_OK)
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        return Response({"message": "Send a POST request to login."}, status=status.HTTP_200_OK)


# Inspiration page view
class InspirationImageListView(generics.ListAPIView):
    queryset = InspirationImage.objects.all()
    serializer_class = InspirationImageSerializer
    permission_classes = [AllowAny]


# TeamCard page view
class TeamCardListView(generics.ListAPIView):
    queryset = TeamCard.objects.all()
    serializer_class = TeamCardSerializer
    permission_classes = [AllowAny]