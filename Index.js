(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Index_atlas_1", frames: [[0,0,512,512],[0,514,512,512]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._5291043 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.replay = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.YesBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ACnBxQgSgPgFgdIAdgFQADATAMAJQAMAKAUAAQAWAAAKgIQAKgJAAgMQABgKgKgGQgGgEgZgHQgigIgNgGQgNgHgHgLQgHgLAAgMQAAgMAGgKQAGgLAJgHQAIgFAMgEQAMgDAOAAQAVAAARAGQAQAGAIALQAHAKADASIgeAEQgCgOgKgIQgKgIgSAAQgVAAgJAHQgJAHAAAJQAAAGAEAFQAEAEAHADIAcAIQAgAJAOAGQANAFAHALQAHAKAAAQQAAAPgJAOQgJANgRAIQgRAHgVAAQgkAAgSgOgAgZBnQgXgZAAgsQAAgtAXgZQAYgZAlAAQAkAAAXAYQAXAZAAAsIAAAIIiGAAQACAeAOAQQAOAQAXAAQARAAAMgJQANgJAGgTIAgAEQgHAcgVAPQgUAPggAAQgnAAgXgYgABVAPQgCgWgJgLQgOgSgYAAQgVAAgOAOQgOAOgCAXIBkAAIAAAAgAjEB7IAAhqIhhiPIApAAIBKB2IBMh2IAnAAIhkCPIAABqg");
	this.shape.setTransform(118.3,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._5291043();
	this.instance.setTransform(-59,-59,0.2305,0.2305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._5291043();
	this.instance.setTransform(-59,-59,0.2305,0.2305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-59,118,118);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Here is your Checklist!", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-37.5,638.9,75);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Here is your Checklist!", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-37.5,638.9,75);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Extra fun stuff?", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Extra fun stuff?", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you have a car? ", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you have a car? ", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you: Own/Rent? ", "bold 48px 'Arial'", "#333333");
	this.text.lineHeight = 56;
	this.text.parent = this;
	this.text.setTransform(-229.15,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.1,-39.8,462.29999999999995,79.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you: Own/Rent? ", "bold 48px 'Arial'", "#333333");
	this.text.lineHeight = 56;
	this.text.parent = this;
	this.text.setTransform(-229.15,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.1,-39.8,462.29999999999995,79.6);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you have a yard?", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Do you have a yard?", "bold 48px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 56;
	this.text.lineWidth = 635;
	this.text.parent = this;
	this.text.setTransform(0,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-39.8,638.9,79.6);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AjODPIAAmdIGdAAIAAGdg");
	this.shape.setTransform(20.65,20.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,41.3);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AkZBwQgdgRgOgdQgOgeAAghQAAg9AhgjQAigkA1AAQAjAAAcARQAcAQAOAeQAOAeAAAkQAAAmgPAfQgPAegcAPQgdAQggAAQgkAAgbgSgAkXhMQgZAYAAA4QAAAtAYAaQAZAaAlAAQAlAAAYgaQAYgaAAgxQABgdgLgXQgKgXgUgNQgUgMgZAAQgjAAgaAYgAE1B9IAAhuQgBgSgEgJQgDgKgJgFQgJgGgNAAQgTAAgOANQgOAMAAAiIAABjIgfAAIAAi0IAcAAIAAAaQATgeAmAAQAQAAAOAGQAOAFAHAKQAHAKADANQABAIAAAVIAABvgABOB9IgkiKIglCKIggAAIg3i0IAgAAIAoCOIAkiOIAhAAIAkCLIApiLIAeAAIg5C0g");
	this.shape.setTransform(118.6,30.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Rent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhcBnQgXgZAAgsQAAgtAXgZQAYgZAlAAQAkAAAXAYQAXAZAAAsIAAAIIiHAAQACAeAPAQQAPAQAXAAQARAAAMgJQALgJAHgTIAgAEQgIAcgUAPQgUAPgfAAQgoAAgXgYgAASAPQgCgWgJgLQgOgSgXAAQgWAAgOAOQgOAOgCAXIBkAAIAAAAgAExB4QgJgFgEgIQgEgJAAgcIAAhnIgWAAIAAgYIAWAAIAAgtIAfgTIAABAIAfAAIAAAYIgfAAIAABpQAAANACAEQABADAEADQAEACAGAAIAOgBIAEAbQgNADgKAAQgRAAgJgGgADNB7IAAhuQAAgSgEgJQgDgKgJgFQgJgGgNAAQgTAAgPANQgOAMAAAiIAABjIgfAAIAAi0IAcAAIAAAaQAUgeAmAAQAQAAAOAGQAOAFAHAKQAGAKADANQACAIAAAVIAABvgAiuB7Ig5hWQgKgMgHgFQgHgFgIgCIg5gBIAABvIghAAIAAj5IBvAAQAhAAASAHQARAGALARQAKARAAAVQAAAbgRASQgRARglAFQAOAHAGAGQAPANANAUIAsBEgAlAgQIBHAAQAXAAANgEQANgFAGgKQAHgLAAgMQAAgSgNgLQgNgMgcAAIhPAAg");
	this.shape.setTransform(116.675,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Pool = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABwBnQgYgZAAgtQAAgyAcgYQAYgUAhAAQAmAAAXAYQAYAZAAAqQAAAjgKAUQgLAUgUALQgUALgYAAQgmAAgXgYgACHgTQgPASAAAiQAAAiAPASQAPARAXAAQAXAAAQgRQAPgSAAgkQAAgggPgRQgQgSgXAAQgXAAgPARgAhSBnQgXgZAAgtQAAgyAcgYQAXgUAhAAQAlAAAYAYQAXAZAAAqQABAjgLAUQgLAUgTALQgVALgXAAQgmAAgXgYgAg6gTQgQASAAAiQAAAiAQASQAOARAXAAQAXAAAPgRQAPgSAAgkQAAgggPgRQgPgSgXAAQgXAAgOARgAElB7IAAj5IAfAAIAAD5gAlDB7IAAj5IBfAAQAZAAAMACQATADANAJQAMAIAIAQQAHAQAAASQAAAggUAWQgVAVg1AAIhAAAIAABmgAkigHIBBAAQAgAAANgMQAOgMAAgWQAAgQgIgLQgIgLgNgDQgIgDgXAAIhAAAg");
	this.shape.setTransform(110.15,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.N0Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AA5BnQgXgZAAgtQAAgyAcgYQAXgUAiAAQAlAAAYAYQAYAZAAAqQAAAjgLAUQgKAUgUALQgUALgYAAQgmAAgYgYgABRgTQgQASAAAiQAAAiAQASQAPARAXAAQAXAAAPgRQAPgSAAgkQAAgggPgRQgPgSgXAAQgXAAgPARgAgnB7IiEjEIAADEIggAAIAAj5IAiAAICEDDIAAjDIAgAAIAAD5g");
	this.shape.setTransform(116.125,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Motorcycle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ADvCeIgDgdQAKADAIAAQAKABAGgEQAGgEAEgFIAMgfIhFi1IAiAAIAlBoQAIAUAFAWQAGgVAHgUIAnhpIAfAAIhFC4QgLAdgHAMQgIAPgKAHQgLAHgPAAQgJAAgLgEgAKpBEQgXgYAAgsQAAguAYgZQAXgZAmAAQAkAAAXAZQAXAYAAAtIAAAHIiHAAQACAeAPAQQAPARAXgBQARABAMgKQAMgJAHgTIAfAEQgHAcgVAPQgUAQgfAAQgogBgYgYgAMZgTQgCgWgKgMQgOgSgYAAQgVAAgOAOQgPAPgBAXIBlAAIAAAAgAGtBEQgXgYAAgtQAAgdAKgWQAKgWAUgLQAUgLAXAAQAeAAATAPQASAPAGAbIgeAFQgFgTgKgIQgLgKgQAAQgXAAgOARQgPARAAAjQAAAkAOAQQAOARAXAAQASAAAMgLQAMgLADgXIAfAEQgFAfgVASQgUASgeAAQglAAgXgZgABPBEQgXgYAAgtQAAgdAKgWQAKgWAUgLQAUgLAXAAQAeAAATAPQASAPAGAbIgeAFQgFgTgKgIQgLgKgQAAQgXAAgOARQgPARAAAjQAAAkAOAQQAOARAXAAQASAAAMgLQAMgLADgXIAfAEQgFAfgVASQgUASgeAAQglAAgXgZgAjoBEQgYgZAAgsQAAgzAcgYQAYgUAhAAQAmAAAYAZQAXAYAAArQAAAigKAUQgLAVgUALQgUAKgYABQgmgBgXgYgAjRg1QgPARAAAjQAAAhAPASQAPARAXAAQAXAAAQgRQAPgSAAgjQAAghgPgRQgQgRgXAAQgXgBgPASgAoMBEQgXgZAAgsQAAgzAcgYQAXgUAiAAQAlAAAYAZQAYAYAAArQAAAigLAUQgKAVgUALQgUAKgYABQgmgBgYgYgAn0g1QgQARAAAjQAAAhAQASQAPARAXAAQAXAAAPgRQAPgSAAgjQAAghgPgRQgPgRgXAAQgXgBgPASgAk/BVQgJgEgEgJQgEgJAAgbIAAhoIgWAAIAAgYIAWAAIAAgtIAfgTIAABAIAfAAIAAAYIgfAAIAABpQAAANACAEQABAEAEACQAEACAGAAIAOgBIAEAbQgNADgKAAQgRAAgJgGgAJOBYIAAj5IAfAAIAAD5gAgyBYIAAi0IAcAAIAAAbQAKgTAJgGQAIgGALAAQAQAAAQAKIgLAcQgLgGgMgBQgKAAgHAHQgIAGgDALQgFAQAAAUIAABdgAppBYIAAjQIhJDQIgeAAIhIjUIAADUIggAAIAAj5IAyAAIBHDVIBJjVIAtAAIAAD5g");
	this.shape.setTransform(112.075,33.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Car_Yes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ACnBxQgSgPgFgdIAdgFQADATAMAJQAMAKAUAAQAWAAAKgIQAKgJAAgMQABgKgKgGQgGgEgZgHQgigIgNgGQgNgHgHgLQgHgLAAgMQAAgMAGgKQAGgLAJgHQAIgFAMgEQAMgDAOAAQAVAAARAGQAQAGAIALQAHAKADASIgeAEQgCgOgKgIQgKgIgSAAQgVAAgJAHQgJAHAAAJQAAAGAEAFQAEAEAHADIAcAIQAgAJAOAGQANAFAHALQAHAKAAAQQAAAPgJAOQgJANgRAIQgRAHgVAAQgkAAgSgOgAgZBnQgXgZAAgsQAAgtAXgZQAYgZAlAAQAkAAAXAYQAXAZAAAsIAAAIIiGAAQACAeAOAQQAOAQAXAAQARAAAMgJQANgJAGgTIAgAEQgHAcgVAPQgUAPggAAQgnAAgXgYgABVAPQgCgWgJgLQgOgSgYAAQgVAAgOAOQgOAOgCAXIBkAAIAAAAgAjEB7IAAhqIhhiPIApAAIBKB2IBMh2IAnAAIhkCPIAABqg");
	this.shape.setTransform(118.3,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Car_No = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AA5BnQgXgZAAgtQAAgyAcgYQAXgUAiAAQAlAAAYAYQAYAZAAAqQAAAjgLAUQgKAUgUALQgUALgYAAQgmAAgYgYgABRgTQgQASAAAiQAAAiAQASQAPARAXAAQAXAAAPgRQAPgSAAgkQAAgggPgRQgPgSgXAAQgXAAgPARgAgnB7IiEjEIAADEIggAAIAAj5IAiAAICEDDIAAjDIAgAAIAAD5g");
	this.shape.setTransform(116.125,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Boat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABVBxQgQgPAAgXQAAgNAGgLQAHgLAJgHQAKgGAMgEIAcgEQAlgFASgGIAAgIQAAgSgJgHQgMgLgXAAQgWAAgKAIQgLAHgEAUIgfgEQAFgUAJgMQAKgMARgGQASgGAXAAQAYAAAOAFQAOAGAIAIQAGAIADANQACAIgBATIAAApQAAArACAMQACALAGAKIggAAQgEgJgCgNQgRAOgQAGQgQAGgSAAQgdAAgRgOgACRAsQgTADgIADQgHADgFAHQgEAHAAAIQAAAMAJAIQAKAIARAAQATAAANgHQAOgIAGgOQAFgKABgVIAAgLQgSAHghAFgAhmBnQgYgZABgtQAAgyAcgYQAXgUAhAAQAmAAAXAYQAXAZABAqQAAAjgLAUQgKAUgVALQgSALgZAAQglAAgYgYgAhPgTQgPASAAAiQAAAiAPASQAQARAWAAQAYAAAPgRQAOgSAAgkQAAgggOgRQgPgSgYAAQgWAAgQARgAEpB4QgKgFgEgIQgEgJABgcIAAhnIgXAAIAAgYIAXAAIAAgtIAegTIAABAIAfAAIAAAYIgfAAIAABpQAAANACAEQABADAEADQAEACAGAAIAOgBIAEAbQgMADgKAAQgRAAgJgGgAlYB7IAAj5IBeAAQAcAAASAHQARAIAKAQQAJAQAAARQAAAQgIAOQgIAOgTAJQAXAHAMAPQANAQAAAWQAAARgHAPQgIAPgLAJQgLAIgQAEQgRAEgYAAgAk3BeIBVgCQALgCAIgEQAIgFAEgJQAGgJAAgMQAAgOgHgLQgIgKgMgEQgOgEgXAAIg6AAgAk3gVIA2AAQAWAAAKgDQAMgEAHgIQAGgJAAgNQAAgNgGgJQgGgKgLgDQgLgEgbAAIgyAAg");
	this.shape.setTransform(120.1,30.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(111.475,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuSE2QjIAAAAjIIAAjbQAAjIDIAAIclAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_2.setTransform(111.475,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(57.9,57.9,0.3729,0.3729,0,0,0,0.7,0.7);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(59,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:59,y:59,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(319.45,37.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(319.45,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,75);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(319.45,39.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(319.45,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,79.6);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(319.45,39.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(319.45,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,79.6);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(231.15,39.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(231.15,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462.3,79.6);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(319.45,39.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(319.45,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,79.6);


// stage content:
(lib.Index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {a:0,b:1,c:2,d:3,e:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4];
	// timeline functions:
	this.frame_0 = function() {
		// Number of snowflakes
		var numFlakes = 50; 
		var flakes = [];
		
		// Create snowflakes
		for(var i = 0; i < numFlakes; i++){
		    var flake = new createjs.Shape();
		    var size = Math.random() * 3 + 1; // random radius
		    flake.graphics.beginFill("white").drawCircle(0, 0, size);
		    flake.x = Math.random() * stage.canvas.width;
		    flake.y = Math.random() * stage.canvas.height;
		    flake.speed = Math.random() * 2 + 1; // random falling speed
		    stage.addChild(flake);
		    flakes.push(flake);
		}
		
		// Animate snowflakes
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", function(){
		    for(var i=0; i<flakes.length; i++){
		        var f = flakes[i];
		        f.y += f.speed;
		        if(f.y > stage.canvas.height){
		            f.y = -5;
		            f.x = Math.random() * stage.canvas.width;
		        }
		    }
		    stage.update();
		});
		this.stop();
		
		this.Own_btn.addEventListener("click", () => {
		    this.gotoAndStop("b");
		});
		
		this.Rent_btn.addEventListener("click", () => {
		    this.gotoAndStop("b");
		});
	}
	this.frame_1 = function() {
		this.stop();
		this.Yes_btn.addEventListener("click", () => {
		    this.gotoAndStop("c");
		});
		
		this.No_btn.addEventListener("click", () => {
		    this.gotoAndStop("c");
		});
	}
	this.frame_2 = function() {
		this.stop();
		this.Car_Y_btn.addEventListener("click", () => {
		    this.gotoAndStop("d");
		});
		
		this.Car_N_btn.addEventListener("click", () => {
		    this.gotoAndStop("d");
		});
	}
	this.frame_3 = function() {
		this.stop();
		this.Boat_btn.addEventListener("click", () => {
		    this.gotoAndStop("e");
		});
		
		this.MC_btn.addEventListener("click", () => {
		    this.gotoAndStop("e");
		});
		
		this.Pool_btn.addEventListener("click", () => {
		    this.gotoAndStop("e");
		});
	}
	this.frame_4 = function() {
		this.stop();
		
		this.replay_btn.addEventListener("click", function() {
		    window.location.reload(); // reloads the entire HTML page
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Layer_6
	this.replay_btn = new lib.Symbol8();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(600.7,444.7,1,1,0,0,0,20.7,20.7);
	this.replay_btn._off = true;
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(4).to({_off:false},0).wait(1));

	// Layer_3
	this.instance = new lib.replay();
	this.instance.setTransform(580,424,0.0807,0.0807);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.Rent_btn = new lib.Rent();
	this.Rent_btn.name = "Rent_btn";
	this.Rent_btn.setTransform(440.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Rent_btn, 0, 1, 2, false, new lib.Rent(), 3);

	this.Own_btn = new lib.Symbol1();
	this.Own_btn.name = "Own_btn";
	this.Own_btn.setTransform(200.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Own_btn, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.No_btn = new lib.N0Btn();
	this.No_btn.name = "No_btn";
	this.No_btn.setTransform(440.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.No_btn, 0, 1, 2, false, new lib.N0Btn(), 3);

	this.Yes_btn = new lib.YesBtn();
	this.Yes_btn.name = "Yes_btn";
	this.Yes_btn.setTransform(200.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Yes_btn, 0, 1, 2, false, new lib.YesBtn(), 3);

	this.Car_N_btn = new lib.Car_No();
	this.Car_N_btn.name = "Car_N_btn";
	this.Car_N_btn.setTransform(440.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Car_N_btn, 0, 1, 2, false, new lib.Car_No(), 3);

	this.Car_Y_btn = new lib.Car_Yes();
	this.Car_Y_btn.name = "Car_Y_btn";
	this.Car_Y_btn.setTransform(200.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Car_Y_btn, 0, 1, 2, false, new lib.Car_Yes(), 3);

	this.Pool_btn = new lib.Pool();
	this.Pool_btn.name = "Pool_btn";
	this.Pool_btn.setTransform(209.5,338.95);
	new cjs.ButtonHelper(this.Pool_btn, 0, 1, 2, false, new lib.Pool(), 3);

	this.MC_btn = new lib.Motorcycle();
	this.MC_btn.name = "MC_btn";
	this.MC_btn.setTransform(440.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.MC_btn, 0, 1, 2, false, new lib.Motorcycle(), 3);

	this.Boat_btn = new lib.Boat();
	this.Boat_btn.name = "Boat_btn";
	this.Boat_btn.setTransform(200.05,286.5,1,1,0,0,0,111.5,31);
	new cjs.ButtonHelper(this.Boat_btn, 0, 1, 2, false, new lib.Boat(), 3);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(320,295,1,1,0,0,0,59,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Own_btn},{t:this.Rent_btn}]}).to({state:[{t:this.Yes_btn},{t:this.No_btn}]},1).to({state:[{t:this.Car_Y_btn},{t:this.Car_N_btn}]},1).to({state:[{t:this.Boat_btn},{t:this.MC_btn},{t:this.Pool_btn}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_4
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(319.75,184.85,1,1,0,0,0,231.2,39.8);

	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(319.45,184.85,1,1,0,0,0,319.4,39.8);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(319.45,184.85,1,1,0,0,0,319.4,39.8);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.setTransform(319.45,184.85,1,1,0,0,0,319.4,39.8);

	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(319.45,182.55,1,1,0,0,0,319.4,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// Layer_1
	this.text = new cjs.Text("Tell Us Your Home, We’ll Tell You How to Prep for Winter? ", "26px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 457;
	this.text.parent = this;
	this.text.setTransform(320.75,41.05);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},4).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,240,320,240);
// library properties:
lib.properties = {
	id: 'A3CEDF97974E44C0874F4661B4E765D7',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Index_atlas_1.png?1758126296882", id:"Index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A3CEDF97974E44C0874F4661B4E765D7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;