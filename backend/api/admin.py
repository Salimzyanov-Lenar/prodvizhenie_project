from django.contrib import admin


from .models import InspirationImage, TeamCard


@admin.register(InspirationImage)
class InspirationImageAdmin(admin.ModelAdmin):
    list_display = ('caption', 'image')


@admin.register(TeamCard)
class TeamCardAdmin(admin.ModelAdmin):
    list_display = ('name', 'image', 'description')