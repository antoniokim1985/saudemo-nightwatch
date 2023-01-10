:computer: This test suite works using NodeJS + NightWatchJS + Cucumber (BDD)

"Page Object Model (POM) was used as a design pattern. 
It is designed to allow previous code to be reused in each subsequent step, optimizing reuse and avoiding redundant functions. 


:bulb: To use it, you must first clone the repository and install the node modules.


--------------------------------------------------------------------------------------------------------------
npm install
---------------------------------------------------------------------------------------------------------------


:dart: Being in root folder of the project it is possible to run tests using:

--------------------------------------------------------------------------------------------------------------
npx nightwatch --env cucumber-js --tags "@NameOfTag"  [--format html:report/cucumber_report.html]
--------------------------------------------------------------------------------------------------------------


[--tags]: focus tests from the test suite


[--format]: creates html reports to the :file_folder: report with name cucumber_report.html in case it is being used [--format html:report/cucumber_report.html]
          can create json reports to the :file_folder: report changing html for json


Next graph shows all the flows automated by the script
![image](https://user-images.githubusercontent.com/60762744/211461622-2a114da7-025e-476c-9d48-bb51c91e29a5.png)


In case you have any questions please do not hesitate to contact me!
