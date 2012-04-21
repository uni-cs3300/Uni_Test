import pyjd
import re

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
from pyjamas.ui.Button import Button
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.KeyboardListener import KeyboardHandler, KEY_ENTER
from pyjamas import Window
from pyjamas.Timer import Timer
from pyjamas.JSONService import JSONProxy
from pyjamas.JSONParser import JSONParser
import pygwt

class Search:
    def onModuleLoad(self):
        
        Window.alert('Loadingg')
          # Setup JSON RPC
        self.remote = DataService()
        parser = JSONParser()
        
        #initialize member variables
        self.mainPanel = VerticalPanel()
        self.searchPanel = HorizontalPanel()
        self.resultsPanel = VerticalPanel()
        
        self.deptLabel = Label('Department')
        self.deptBox = TextBox()
        self.courseNoLabel = Label ('Course Number')
        self.courseNoBox = TextBox()
        self.searchButton = Button('Search', self.searchCourses)
        self.searchPanel = VerticalPanel()

        # Assemble search panel
        self.searchPanel.add(self.deptLabel)
        self.searchPanel.add(self.deptBox)
        self.searchPanel.add(self.courseNoLabel)
        self.searchPanel.add(self.courseNoBox)
        self.searchPanel.add(self.searchButton)
        
        # Assemble results panel
        self.resultsLabel = Label('Results here')
        self.resultsPanel.add(self.resultsLabel)
        
        # Assemble main panel
        self.mainPanel.add(self.searchPanel)
        self.mainPanel.add(self.resultsPanel)
        
        # Associate mainPanel with the HTML host page
        RootPanel().add(self.mainPanel)
        
        # Move cursor focus to input box
        self.deptBox.setFocus(True)

    

        #Search courses
    def searchCourses(self):
        Window.alert('Searching')
        #searchEntry = self.searchBox.getText().toUpperCase().trim()
        #self.remote.getSearch(self,searchEntry)
# ###        

#    
#    def onRemoteResponse(self, response, request_info):
#        '''
#        Called when a response is received from a RPC.
#        '''
#        # if the method requested is in DataService.methods
#        if (request_info.method in DataService.methods) :
#            if (request_info.method is DataService.methods[1]):
#                Window.alert(response)
#                if response == None:
#                    Window.alert('No search results found!')
#                else:
#                    for responseObj in response:
#                        course = responseObj['fields']
#                        number = course['number']
#        else:
#            Window.alert('Unrecognized JSONRPC method.')
#            
#    def onRemoteError(self,code,message,request_info):
#        Window.alert(str(code) + "||" + str(message) + "||" + str(request_info))

class DataService(JSONProxy):
    methods = ['getSearch']
    def __init__(self):
        JSONProxy.__init__(self, 'services/', DataService.methods)

if __name__ == '__main__':
    pyjd.setup('./search.html')
    app = Search()
    app.onModuleLoad(self)
    pyjd.run()
