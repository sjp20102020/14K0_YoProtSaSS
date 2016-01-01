http://newtriks.com/2013/06/11/automating-angularjs-with-yeoman-grunt-and-bower/
https://github.com/yeoman/generator-angular

1) #this will not creat node_modules as it is global -g installation
sudo npm install -g  grunt-cli bower yo generator-karma generator-angular generator-protractor


2)mkdir sjpShop
cd sjpShop

3)yo angular sjpShop
(say no to sass)



e2e test
http://likesalmon.net/enable-e2e-testing-with-yeoman-generator-angular/
http://newtriks.com/2013/06/11/automating-angularjs-with-yeoman-grunt-and-bower/
https://gist.github.com/AndreasArledal/6663420




https://www.npmjs.com/package/generator-protractor
http://stackoverflow.com/questions/19066747/integrating-protractor-with-yeoman-via-grunt



----------------------------------------
How to run the tests:- e2e-----------------
install:
mkdir sjpShop/test/e2e/
cd sjpShop/test/e2e/
yo protractor




0:)
cd sjpShop
grunt serve  (this will run the app on
  baseUrl: 'http://localhost:9000',



1). Start the Selenium server:
./node_modules/.bin/webdriver-manager start

2). Open a new terminal and run Protractor:
./node_modules/.bin/protractor protractor.conf.js



======install ruby===sass====compass===========
sudo apt-get install ruby-compass
set $PATH in /etc/profile


troubleshooting----
gem uninstall sass --version 3.3.0.rc.2
gem install sass --version 3.2.13
compass -v # Working :)


2Method
sudo gem install compass   //compass version 1.0.3 and sass 3.4.19








