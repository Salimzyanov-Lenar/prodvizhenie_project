from rest_framework import serializers
from django.contrib.auth.models import User
from .models import InspirationImage, TeamCard, Course, Audience

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}


    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


#   Inspiration serializer
class InspirationImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InspirationImage
        fields = ['id', 'image', 'caption']



class TeamCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamCard
        fields = '__all__'


class AudienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audience
        fields = ['id', 'name', 'slug']

class CourseSerializer(serializers.ModelSerializer):
    audience = AudienceSerializer(read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'video_id', 'image', 'audience', 'slug']
