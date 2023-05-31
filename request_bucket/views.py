from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth.views import LoginView
from django.views.generic import TemplateView
from django.contrib.sessions.models import Session

class SignupView(CreateView):
    template_name = 'registration/signup.html'
    form_class = UserCreationForm
    # def post(self,request,*args,**kwargs):
    #     print(request.session)
    #     return None
    def get_success_url(self) -> str:
        return reverse_lazy('login')

class CustomLoginView(LoginView):
    next_page = '/welcome/'

class WelcomeView(TemplateView):
    def get(self,request):
        print(request.COOKIES)
        # print(dir(Session.objects))
        obj = Session.objects.first()
        print(obj)
        # print(dir(request.session))
        return super().get(self,request)
    template_name = 'welcome.html'