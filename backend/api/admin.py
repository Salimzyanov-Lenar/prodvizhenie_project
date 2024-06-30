from django.contrib import admin


from .models import InspirationImage, TeamCard, Course, Audience


@admin.register(InspirationImage)
class InspirationImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'image')


@admin.register(TeamCard)
class TeamCardAdmin(admin.ModelAdmin):
    list_display = ('name', 'image', 'description')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'video_id', 'image', 'audience')

@admin.register(Audience)
class AudienceAdmin(admin.ModelAdmin):
    list_display = ('name',)