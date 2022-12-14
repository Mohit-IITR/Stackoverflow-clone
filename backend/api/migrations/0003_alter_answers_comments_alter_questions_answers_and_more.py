# Generated by Django 4.0.3 on 2022-07-01 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_answers_comments_answers_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answers',
            name='comments',
            field=models.ManyToManyField(blank=True, related_name='commentsForAnswer', to='api.comments'),
        ),
        migrations.AlterField(
            model_name='questions',
            name='answers',
            field=models.ManyToManyField(blank=True, to='api.answers'),
        ),
        migrations.AlterField(
            model_name='questions',
            name='comments',
            field=models.ManyToManyField(blank=True, related_name='commentsForQuestions', to='api.comments'),
        ),
        migrations.AlterField(
            model_name='questions',
            name='tags',
            field=models.ManyToManyField(blank=True, to='api.tags'),
        ),
    ]
