from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from .models import *
from rest_framework.permissions import AllowAny, IsAuthenticated
    
class listOfQuestions(viewsets.ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializer

# @api_view(['GET', 'POST'])
# def answers(request):
#     try:
#         if request.method == 'GET':
#             answers = Answers.objects.all()
#             serializer = AnswerSerializer(answers,many= True)
#             return Response(serializer.data)
        
#         elif request.method == 'POST':
#             data= request.data
#             serializer = AnswerSerializer(data)
#             if serializer.is_valid(raise_exception=True):
#                 serializer.save()
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     except Exception as e:
#         return JsonResponse({'error_message': str(e)}, status=500)

class RegisterApi(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer