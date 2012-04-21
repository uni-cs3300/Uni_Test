import pyjd

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.Grid import Grid
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.TextBox import TextBox


from pyjamas.ui.TextArea import TextArea
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML


from pyjamas.ui.FormPanel import FormPanel
from pyjamas.ui.FileUpload import FileUpload

from pyjamas.ui.KeyboardListener import KeyboardHandler, KEY_ENTER

from pyjamas import Window

from pyjamas.JSONService import JSONProxy
from pyjamas.JSONParser import JSONParser

import pygwt

class CourseProfile:
    def onModuleLoad(self):

        self.mainPanel = VerticalPanel()
        self.courseTable = FlexTable()
        
        self.courseTable.setText(0, 0, 'Course Title: ')
        self.courseTable.setText(1, 0, 'Course Description: ')
        self.courseTable.setText(2, 0, 'Enroll: ')
        self.courseTable.setText(3, 0, 'Friends: ')

        self.mainPanel.add(self.courseTable)
        
        RootPanel().add(self.mainPanel)
        self.remote.getCourse(self)

    def onRemoteResponse(self, response, request_info):
            Window.alert(response)

            row = self.ratingsTable.getRowCount()
            name = response['name']
            description = response['description']
            enrolled = response['enrolled']
            Window.alert(name)

##            if enrolled:
##                self.courseTable.add(2, 1, 'Enrolled!') 
##
##            else:
##                def enrollClick(event):
##                    return
##
##                self.courseTable.add(2, 1, Button('Enroll', enrollClick)
            
            if name.isalpha() and description.isalpha():
                self.courseTable.add(0, 1, name)
                self.courseTable.add(1, 1, description)
                
                
    def onRemoteError(self, code, message, request_info):
        Window.alert(str(code) + "||" + str(message) + "||" + str(request_info))

class DataService(JSONProxy):
    methods = ['addUser', 'enrollInCourse', 'updateProfile', 'searchCourse', 'goToCourse', 'getCourse']
    def __init__(self):
        JSONProxy.__init__(self, 'services/', DataService.methods)

if __name__ == '__main__':
    pyjd.setup("./CourseProfile.html")
    app = CourseProfile()
    app.onModuleLoad()
    pyjd.run()
