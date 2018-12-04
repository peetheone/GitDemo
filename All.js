describe('Chain locators demo',function(){
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it('Open Angular js website',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		Add(2,3);
		Add(2,4);
		Add(2,5);
		Add(2,6);
		Add(2,7);

		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
		/*element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
		})*/		
	})	
})