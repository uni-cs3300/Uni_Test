from django.db import models

class User(models.Model):
    # Facebook ID of user
    uid = models.IntegerField(primary_key=True)
    # Year that the user is in
    year = models.CharField(max_length=50)
    majorId = models.IntegerField(max_length=2, blank=True, null=True, default=None)
    def __unicode__(self):
        return self.uid
    
class Dept(models.Model):
    # deptId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    
class Course(models.Model):
    # Course ID, incremented naturally
    # cid = models.AutoField(primary_key=True)
    # Semester - Fall, Spring or Summer
    semester = models.CharField(max_length=10)
    # Year that the course is offered
    year = models.IntegerField(max_length=4)
    professor = models.CharField(max_length=100)
    # Rating - Average rating for the course
    avg_rating = models.FloatField()
    size = models.IntegerField(max_length=4)
    time = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    deptId = models.ForeignKey(Dept)

class Rating(models.Model):
    # Facebook ID of user
    uid = models.ForeignKey(User)
    cid = models.ForeignKey(Course)
    rating = models.IntegerField(max_length=2)
    comments = models.CharField(max_length=5000)
    
class Major(models.Model):
    # Major ID
    # majorId = models.AutoField(primary_key=True)
    deptId = models.ForeignKey(Dept)
    majorName = models.CharField(max_length=100)
    
class Enroll(models.Model):
    uid = models.ForeignKey(User)
    cid = models.ForeignKey(Course)

class Bookmark(models.Model):
    uid = models.ForeignKey(User)
    cid = models.ForeignKey(Course)
    


class Quiz(models.Model):
    # qid = models.AutoField(primary_key=True)
    uid = models.ForeignKey(User)
    cid = models.ForeignKey(Course)
    question = models.CharField(max_length=1000)
    answer = models.CharField(max_length=1000)

class Reply(models.Model):
    # replyId = models.AutoField(primary_key=True)
    qid = models.ForeignKey(Quiz)
    uid = models.ForeignKey(User)
    reply = models.CharField(max_length=1000)

    

    

