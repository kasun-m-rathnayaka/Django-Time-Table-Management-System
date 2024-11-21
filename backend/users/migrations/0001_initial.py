# Generated by Django 5.1.3 on 2024-11-18 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=150, unique=True)),
                ('role', models.CharField(choices=[('admin', 'Admin'), ('lecturer', 'Lecturer'), ('student', 'Student')], default='student', max_length=20)),
                ('status', models.CharField(choices=[('active', 'Active'), ('blocked', 'Blocked')], default='active', max_length=10)),
                ('last_login_attempt', models.DateTimeField(blank=True, null=True)),
                ('failed_attempts', models.IntegerField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]