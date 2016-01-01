'use strict';

xdescribe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://localhost');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  xdescribe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});


describe('Yo App', function () {
  describe('Basic tabs test', function () {
    beforeEach(function () {
      browser.get('/');
    });

    it('should deplay the yeoman image in home page', function () {
      //expect(element(by.css('.container div div:nth-child(1) p:nth-child(1)')).isPresent()).toBe(true);
      //expect(true).toBeTruthy();
      // expect(element(by.css('.container div div:nth-child(1)  p .lead img')).getAttribute('src')).toMatch(/images\/yeoman.png/);
      expect(element(by.css('.jumbotron h1')).is10Present()).toBe(true);
      expect(element(by.css('.jumbotron h1')).getText()).toEqual('\'Allo, \'Allo!');

      expect(element(by.css('.jumbotron p img')).isPresent()).toBe(true);
      expect(element(by.css('.jumbotron p img')).getAttribute('src')).toMatch(/images\/yeoman.png/);
    });


  });
});



/*
 it('should load 3rd thumbnail as main image when clicked', function () {
 element(by.css('.phone-thumbs li:nth-child(3) img')).click();
 expect(element(by.css('img.phone')).getAttribute('src')).toMatch(/img\/phones\/motorola-atrix-4g.2.jpg/);

 });
 */
