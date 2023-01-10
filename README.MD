This test suite works using NodeJS + NightWatchJS + Cucumber (BDD)

"Page Object Model (POM) was used as a design pattern. 
It is designed to allow previous code to be reused in each subsequent step, optimizing reuse and avoiding redundant functions. 

To use it, you must first clone the repository and install the node modules.


--------------------------------------------------------------------------------------------------------------
npm install
---------------------------------------------------------------------------------------------------------------

Being in root folder of the project it is possible to run tests using:

--------------------------------------------------------------------------------------------------------------
npx nightwatch --env cucumber-js --tags "@NameOfTag"  [--format html:report/cucumber_report.html]
--------------------------------------------------------------------------------------------------------------


[--tags]: can focus tests from the test suite
[--format]: can create html reports to the folder report with name cucumber_report.html in case it is being used [--format html:report/cucumber_report.html]
          can create json reports to the folder report changing html for json


Next graph shows all the flows automated by the script
![image](https://user-images.githubusercontent.com/60762744/211461622-2a114da7-025e-476c-9d48-bb51c91e29a5.png)
