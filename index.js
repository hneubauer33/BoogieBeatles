(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellow_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.with_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhsBuQgugtAAhBQAAg/AugtQAsguBAAAQBAAAAuAuQAtAtAAA/QAABBgtAtQguAthAAAQhAAAgsgtg");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhsBuQgugtAAhBQAAg/AugtQAsguBAAAQBAAAAuAuQAtAtAAA/QAABBgtAtQguAthAAAQhAAAgsgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.white_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA/gsArQgsAsg+AAQg9AAgsgsQgngmgFg2QAAgGAAgIQAAg9AsgsQAsgsA9AAQA+AAAsAsQAAAAABABQArAsAAA8g");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30B4BB").s().p("AhpBqQgngmgEg1IgBgPQAAg9AsgsQAsgsA9AAQA+AAAsAsIABABQArAsAAA8QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACCBTQgCABgCACQgsAsg+AAQg9AAgsgsQgngngEg0QgBgHAAgHQAAg+AsgsQACgCABgC");
	this.shape_2.setTransform(12.975,17.0375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhpBrQgngogEg0IgBgPQAAg7ApgrIADgDQAsgsA9AAQA+AAAsAsIABABQArAsAAA8QAAA/gsAsIgDACQgrApg8AAQg9AAgsgrg");
	this.shape_3.setTransform(15.65,14.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpBqQgngmgEg1IgBgPQAAg9AsgsQAsgsA9AAQA+AAAsAsIABABQArAsAAA8QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_4.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.tour_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgtAsg9AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAqgrA8gBIAGAAQA8ABArArQAsAsAAA9g");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQArgqA7gCIAHAAQA7ACArAqQAsAsAAA9QAAA+gsAsQgtAsg9AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQArgqA7gCIAHAAQA7ACArAqQAsAsAAA9QAAA+gsAsQgtAsg9AAQg9AAgsgsg");
	this.shape_2.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.subheading = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhIBoQgcgXgEgrIAtAAQACAYARANQARAOAcAAQAZAAAPgKQAPgKAAgRQAAgMgJgHQgJgIgVgFIgvgMQgTgFgMgFQgMgFgIgHQgIgHgFgLQgFgLAAgMQABgVALgQQAMgQAVgJQAVgJAbAAQAaAAAUAIQAVAIAMAQQAIAJAEALQAEAMABAQIgsAAQgEgWgNgKQgOgKgXAAQgVAAgMAIQgMAHgBANQAAAJAHAGQAHAHAOADIA3APQAmAJARAQQARARAAAcQgBAkgaAUQgbAVgvAAQgwAAgcgXg");
	this.shape.setTransform(1091.4007,33.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AByB8IAAifQAAgYgJgLQgLgMgUAAQgYAAgOAQQgNAQAAAcIAACSIgtAAIAAijQAAgVgKgLQgLgLgTAAQgYAAgNAQQgOAPAAAbIAACUIguAAIAAjwIAsAAIAAAeQAOgUAOgIQAPgJAWAAQAZAAAPAKQAOAKAIAVQAOgWARgKQARgJAZAAQATAAAQAHQAPAGAJAMQAJAKADAOQAEAOAAAVIAACjg");
	this.shape_1.setTransform(1059.8,33.5987);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSB8QgWAAgRgHQgRgHgKgNQgJgLgEgOQgDgOAAgVIAAigIAuAAIAACdQAAAZALAMQAMAMAXAAQAeAAAQgQQARgQAAgdIAAiRIAuAAIAADwIgsAAIAAgbQgRATgSAHQgQAIgWAAIgCAAg");
	this.shape_2.setTransform(1026.95,34.2515);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCiQgSgIgRgSIAAAbIguAAIAAlMIAuAAIAAB3QARgRATgIQATgJAWABQAfAAAXAPQAYAQANAcQANAcgBAmQABAngNAdQgNAcgYAQQgYAQggAAQgWAAgSgIgAgygWQgSAWAAAqQAAArASAYQARAXAhAAQAgAAARgXQASgYAAgqQAAgrgSgWQgRgXggAAQggAAgSAXg");
	this.shape_3.setTransform(1000,29.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWCnIAAlNIAtAAIAAFNg");
	this.shape_4.setTransform(979.65,29.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABgCnIgihkIh9AAIgiBkIgyAAIB6lNIAyAAIB7FNgAAwAbIgwiNIgxCNIBhAAg");
	this.shape_5.setTransform(958.675,29.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4CdQgbgPgOgaQgPgagBgiIAsAAQACAiAUAUQATAUAfAAQAcAAASgQQASgQAAgZQAAgcgUgRQgVgQghgBIgKAAIAAglIAFABIAEAAQAdgBASgOQASgOABgZQgBgWgPgOQgPgOgYAAQgcAAgPARQgQASAAAgIgrAAQAAgzAcgdQAcgcAwgBQAdAAAWAMQAXAMAMAUQANAUAAAaQAAAYgMASQgLARgZANQAdANAOAVQAPAUAAAcQgBAdgOAWQgOAWgZANQgYANggAAQgiAAgagPg");
	this.shape_6.setTransform(914.375,29.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQClIAAjsIhLAAIAAggQAhAAAXgQQAWgQAHgdIAiAAIAAFJg");
	this.shape_7.setTransform(883.825,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIBoQgcgXgEgrIAtAAQACAYARANQARAOAcAAQAZAAAPgKQAPgKAAgRQAAgMgJgHQgJgIgVgFIgvgMQgTgFgMgFQgMgFgIgHQgIgHgFgLQgFgLAAgMQABgVALgQQAMgQAVgJQAVgJAbAAQAaAAAUAIQAVAIAMAQQAIAJAEALQAEAMABAQIgsAAQgEgWgNgKQgOgKgXAAQgVAAgMAIQgMAHgBANQAAAJAHAGQAHAHAOADIA3APQAmAJARAQQARARAAAcQgBAkgaAUQgbAVgvAAQgwAAgcgXg");
	this.shape_8.setTransform(845.2507,33.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BvQgagQgPgdQgOgcAAgmQAAglAOgdQAOgcAagQQAagQAgAAQAlAAAZASQAZATAMAjQAFANACAQQADAQAAAUIivAAQADAlARAVQASAUAfAAQAWAAAOgKQAOgLAJgVIAsAAQgKAmgaAVQgbAVgpAAQghAAgagQgAA/gVQgCgigQgRQgPgSgcAAQgbABgSASQgSATgCAfIB+AAIAAAAg");
	this.shape_9.setTransform(819.85,33.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWCnIAAlNIAtAAIAAFNg");
	this.shape_10.setTransform(800.95,29.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPCTQgMgOAAgeIAAiXIghAAIAAgkIAhAAIAAhMIAsAAIAABMIAsAAIAAAkIgsAAIAACXQABAKAEAGQAEAGAJAAIALgBIAPgFIAAAlIgXAFIgPABQgZAAgNgPg");
	this.shape_11.setTransform(788.55,30.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhcBsQgVgUAAggQAAgdASgTQASgRAlgHIA0gLQAVgEAIgFQAHgFgBgLQAAgRgOgKQgOgKgYgBQgSAAgMAGQgNAFgFAKIgEAKIgCATIgrAAQACgVAEgOQAFgOAJgKQALgNAVgHQAUgHAaAAQAtAAAYAUQAYAUAAAmIAABxQAAAOADAEQADAFAHAAIAGgBIAGgCIAAAkIgPADIgPAAQgQAAgIgHQgJgIgDgRQgSASgUAJQgUAIgYAAQgkAAgWgTgAAjABIgPAFIguALQgVAFgKAJQgKAJAAAOQAAAQANAKQAMAKAUABQAUgBAPgIQAQgIAKgPQAJgOAAgRIAAgeIgNADg");
	this.shape_12.setTransform(769.175,33.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag3BvQgZgQgPgdQgPgcAAgmQAAglAPgdQAOgcAZgQQAZgQAiAAQAjAAAaASQAaATAMAjQAEANACAQQACAQABAUIivAAQADAlARAVQATAUAeAAQAVAAAPgKQAOgLAIgVIAsAAQgIAmgcAVQgbAVgoAAQghAAgagQgAA/gVQgBgigRgRQgPgSgbAAQgcABgSASQgSATgDAfIB/AAIAAAAg");
	this.shape_13.setTransform(742.4,33.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiACnIAAlNICAAAQAVAAAPACQAQACALAEQAMAEAKAHQARALAJARQAJARgBAWQAAAZgLASQgLASgZAMQAeAJANAUQAPATAAAeQAAAYgLAUQgJAUgTAMQgLAIgNAEQgNAEgSACQgSACgYAAgAhTB9IBgAAQAgAAARgPQATgOAAgaQAAgbgRgNQgQgPgfAAIhkAAgAhTgXIBYAAQASAAALgDQAMgDAIgHQAIgGAFgKQAEgKAAgMQAAgLgEgJQgFgKgIgHQgIgHgMgDQgLgDgSAAIhYAAg");
	this.shape_14.setTransform(713.85,29.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3BvQgagQgPgdQgOgcAAgmQAAglAOgdQAOgcAagQQAagQAgAAQAlAAAZASQAaATALAjQAFANACAQQADAQAAAUIivAAQADAlARAVQASAUAfAAQAWAAAOgKQAOgLAIgVIAtAAQgKAmgbAVQgbAVgoAAQghAAgagQgAA/gVQgCgigQgRQgPgSgcAAQgbABgSASQgSATgCAfIB+AAIAAAAg");
	this.shape_15.setTransform(668.75,33.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3CnIAAiaQAAgOgCgJQgCgKgGgFQgGgHgKgEQgJgDgMAAQgdAAgQARQgRARAAAdIAACPIguAAIAAlNIAuAAIAAByQARgPARgHQARgHAUABQAWAAARAHQASAHALAOQAIAKAEAOQAEAOAAATIAACig");
	this.shape_16.setTransform(642,29.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPCTQgNgOAAgeIAAiXIggAAIAAgkIAgAAIAAhMIAtAAIAABMIAsAAIAAAkIgsAAIAACXQAAAKAFAGQAFAGAIAAIALgBIAPgFIAAAlIgXAFIgPABQgaAAgMgPg");
	this.shape_17.setTransform(621.8,30.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPCTQgNgOAAgeIAAiXIggAAIAAgkIAgAAIAAhMIAuAAIAABMIArAAIAAAkIgrAAIAACXQgBAKAFAGQAEAGAKAAIAKgBIAPgFIAAAlIgXAFIgQABQgZAAgMgPg");
	this.shape_18.setTransform(593.2,30.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA3CnIAAiaQAAgOgCgJQgDgKgFgFQgGgHgJgEQgKgDgMAAQgdAAgRARQgQARAAAdIAACPIguAAIAAlNIAuAAIAAByQARgPARgHQAQgHAVABQAWAAASAHQARAHALAOQAIAKAEAOQAEAOAAATIAACig");
	this.shape_19.setTransform(572.85,29.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguCfQgUgIgNgNQgIgIgEgLQgEgJgCgRIAsAAQACASAOAJQAOAJAZAAQAgAAAQgOQAQgOgBgeIAAgcQgOAQgSAHQgSAJgUgBQgfAAgXgOQgXgQgOgaQgNgaAAgjQAAgkAOgbQANgbAYgQQAXgPAfAAQAWAAARAHQARAIAPARIgCgaIAsAAIAADnQAAAYgFARQgGAPgNALQgOANgWAGQgWAHgbgBQgaAAgUgGgAgthnQgRAVAAAmQAAAlARAUQASAVAdABQAegBARgVQARgUABglQAAgmgRgVQgSgWgfAAQgdAAgRAWg");
	this.shape_20.setTransform(545.1,37.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTB8QgVAAgRgHQgRgHgKgNQgJgLgDgOQgEgOAAgVIAAigIAuAAIAACdQAAAZAMAMQALAMAYAAQAcAAARgQQARgQAAgdIAAiRIAuAAIAADwIgsAAIAAgbQgSATgRAHQgQAIgWAAIgDAAg");
	this.shape_21.setTransform(518.5,34.2515);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag8BvQgagQgPgcQgOgdAAgmQAAglAOgdQAPgcAagQQAagQAiAAQAjAAAaAQQAaAQAPAdQAOAdAAAmQAAAlgPAcQgOAcgbAQQgaAQgiAAQgiAAgagQgAgzhBQgSAXAAAqQAAAqASAYQASAXAhAAQAhAAASgXQATgXAAgqQAAgqgSgYQgSgWgigBQghABgSAWg");
	this.shape_22.setTransform(491.325,33.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhBB8IAAjwIAsAAIAAAlQAGgKAFgFIAJgKQAHgJAMgFQALgFAMAAQANAAAMAGIAAApIgLgCIgKAAQgTAAgOAKQgOAKgJARQgIARAAAWIAAB+g");
	this.shape_23.setTransform(470.125,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA3CnIAAiaQAAgOgCgJQgDgKgFgFQgGgHgJgEQgKgDgMAAQgdAAgRARQgQARAAAdIAACPIguAAIAAlNIAuAAIAAByQARgPARgHQARgHAUABQAWAAASAHQARAHALAOQAIAKAEAOQAEAOAAATIAACig");
	this.shape_24.setTransform(446.65,29.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPCTQgMgOAAgeIAAiXIghAAIAAgkIAhAAIAAhMIAtAAIAABMIArAAIAAAkIgrAAIAACXQgBAKAFAGQAEAGAKAAIAKgBIAPgFIAAAlIgXAFIgQABQgZAAgMgPg");
	this.shape_25.setTransform(426.45,30.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhCCdQgJgBgLgEIAAgmQALAEAGABQAGABAGAAQAMABAJgHQAIgGAFgMIAGgUIhkjqIAyAAIA1CKIAHAQIAEAOIAGAUIAGgUIAGgSIAFgMIAyiKIAwAAIhrENQgKAagNAKQgPAMgWAAQgIAAgJgCg");
	this.shape_26.setTransform(392.625,37.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhcBsQgVgUAAggQAAgdASgTQASgRAlgHIA0gLQAVgEAIgFQAHgFgBgLQAAgRgOgKQgOgKgYgBQgSAAgMAGQgNAFgFAKIgEAKIgCATIgrAAQACgVAEgOQAFgOAJgKQALgNAVgHQAUgHAaAAQAtAAAYAUQAYAUAAAmIAABxQAAAOADAEQADAFAHAAIAGgBIAGgCIAAAkIgPADIgPAAQgQAAgIgHQgJgIgDgRQgSASgUAJQgUAIgYAAQgkAAgWgTgAAjABIgPAFIguALQgVAFgKAJQgKAJAAAOQAAAQANAKQAMAKAUABQAUgBAPgIQAQgIAKgPQAJgOAAgRIAAgeIgNADg");
	this.shape_27.setTransform(368.175,33.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAvB5IgfhxIgJghIgGgcIgPA9IgeBxIgxAAIhJjxIAwAAIAjB9IABAFIADAKIAFAWIACAJIAEAUIADgOIADgPIADgMIABgFIAFgUIAhh9IAqAAIAiB8IAHAhIAHAiIAGgdIAFgVIAEgRIAih8IAwAAIhKDxg");
	this.shape_28.setTransform(337.725,33.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhBB8IAAjwIAsAAIAAAlQAGgKAFgFIAJgKQAHgJAMgFQALgFAMAAQANAAAMAGIAAApIgLgCIgKAAQgTAAgOAKQgOAKgJARQgIARAAAWIAAB+g");
	this.shape_29.setTransform(298.475,33.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSB8QgWAAgRgHQgRgHgKgNQgIgLgFgOQgDgOAAgVIAAigIAuAAIAACdQAAAZALAMQAMAMAXAAQAeAAAQgQQARgQAAgdIAAiRIAuAAIAADwIgsAAIAAgbQgRATgSAHQgQAIgWAAIgCAAg");
	this.shape_30.setTransform(275,34.2515);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag8BvQgagQgPgcQgOgdAAgmQAAglAOgdQAPgcAagQQAagQAiAAQAjAAAaAQQAaAQAPAdQAOAdAAAmQAAAlgPAcQgOAcgbAQQgaAQgiAAQgiAAgagQgAgzhBQgSAXAAAqQAAAqASAYQASAXAhAAQAhAAASgXQATgXAAgqQAAgqgSgYQgSgWgigBQghABgSAWg");
	this.shape_31.setTransform(247.825,33.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhCCdQgJgBgLgEIAAgmQALAEAGABQAGABAGAAQAMABAJgHQAIgGAFgMIAGgUIhkjqIAyAAIA1CKIAHAQIAEAOIAGAUIAGgUIAGgSIAFgMIAyiKIAwAAIhrENQgKAagNAKQgPAMgWAAQgIAAgJgCg");
	this.shape_32.setTransform(222.075,37.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag3BvQgZgQgQgdQgOgcAAgmQAAglAOgdQAOgcAagQQAagQAgAAQAlAAAZASQAaATALAjQAFANACAQQADAQAAAUIivAAQADAlARAVQATAUAeAAQAWAAAOgKQAOgLAIgVIAsAAQgJAmgbAVQgbAVgoAAQghAAgagQgAA/gVQgCgigQgRQgPgSgcAAQgbABgSASQgSATgCAfIB+AAIAAAAg");
	this.shape_33.setTransform(181.95,33.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag5BvQgagPgPgdQgPgdAAgmQAAgmAPgcQAPgdAbgPQAbgQAkAAQAsAAAbAXQAbAXAGAqIgsAAQgFgZgQgMQgPgNgZAAQggABgUAXQgUAYAAAoQAAApAUAYQATAXAhABQAbAAAQgPQAQgPAFgdIAsAAQgGAvgcAZQgcAZgvAAQgjAAgbgQg");
	this.shape_34.setTransform(155.775,33.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AA3B8IAAidQAAgZgLgMQgMgMgYAAQgcAAgRAQQgRAQAAAdIAACRIguAAIAAjwIAsAAIAAAbQARgTASgHQARgIAXAAQAWAAARAHQAQAHALANQAJALADAOQAEAOAAAVIAACgg");
	this.shape_35.setTransform(128.75,33.5985);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhcBsQgVgUAAggQAAgdASgTQASgRAlgHIA0gLQAVgEAIgFQAHgFgBgLQAAgRgOgKQgOgKgYgBQgSAAgMAGQgNAFgFAKIgEAKIgCATIgrAAQACgVAEgOQAFgOAJgKQALgNAVgHQAUgHAaAAQAtAAAYAUQAYAUAAAmIAABxQAAAOADAEQADAFAHAAIAGgBIAGgCIAAAkIgPADIgPAAQgQAAgIgHQgJgIgDgRQgSASgUAJQgUAIgYAAQgkAAgWgTgAAjABIgPAFIguALQgVAFgKAJQgKAJAAAOQAAAQANAKQAMAKAUABQAUgBAPgIQAQgIAKgPQAJgOAAgRIAAgeIgNADg");
	this.shape_36.setTransform(102.775,33.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiFCnIAAlNIB4AAQAoAAAdANQAdANATAcQAPAVAHAcQAIAbAAAiQAAA0gSAlQgTAmghAVQgiAVguAAgAhVB9IA7AAQA4AAAcgfQAbgfAAhAQAAgdgFgVQgFgVgLgQQgNgTgVgJQgVgIggAAIg+AAg");
	this.shape_37.setTransform(73.275,29.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1159.5,60.5);


(lib.sale_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AgeCTQgqgJgiggQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9QAAA+gsAsQgsAsg+AAQgPAAgPgDg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeCTQgqgJgiggQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9QAAA+gsAsQgsAsg+AAQgPAAgPgDg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.rubber_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.revolver_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.please_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AgNCbQgPgBgOgFQglgKgdgdQguguAAhAQAAg/AugtQAtguA/AAQBAAAAuAuQAtAtAAA/IgBAVQgDAXgJAUQgMAYgUAWQgoAng0AFIgSABIgNAAg");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNCbQgPgBgOgFQglgKgdgdQguguAAhAQAAg/AugtQAtguA/AAQBAAAAuAuQAtAtAAA/IgBAVQgDAXgJAUQgMAYgUAWQgoAng0AFIgSABIgNAAg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.pepper_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.let_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.help_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.hard_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA/gsArQgsAsg+AAQg+AAgsgsQgrgrAAg/QAAg9ArgtQAsgrA+AAQA+AAAsArQAsAtAAA9g");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30B4BB").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqBqQgrgsAAg+QAAg9ArgtQAtgrA9AAQA+AAAsArQAsAtAAA9QAAA+gsAsQgsAsg+AAQg9AAgtgsg");
	this.shape_2.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,32);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhgFBQgwAAg7gcQgBgDgGgCIgQgNQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIAAAAQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQABgFgEACQABgFgDgEIgGgGQgzhVAehaQAtiICYgNIABABIAABKQAAAJgDADQgDADgJgCQghgHgfATQgeASgMAhQgLAhAMAhQANAhAeAPIAGAGQACAEACgBQAcAnAzgGQApgEAWgbQAYgbAAgpQABjYgBjZQAAgMADgEQAEgFAMABQAWABAsgCIABABQAAAOAJASQAUAuAfASQAAADAEABIAKAIIACADIABAAQAeAkAxAJIABABIAABOQAAAHgDACQgCADgHgBQg6gDgzgYIgXgMIgHgFQgEgDgFAAIAAARIgBDbQgCBVg+A8Qg8A7hWABg");
	mask.setTransform(90.2845,373.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F30").s().p("A2DbWQifAAhxhwQhwhxAAifMAAAgqrQAAifBwhxQBxhwCfAAMAsHAAAQCfAABxBwQBwBxAACfMAAAAqrQAACfhwBxQhxBwifAAg");
	this.shape.setTransform(179.625,525.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F2F30").s().p("A2DbWQifAAhxhwQhwhxAAifMAAAgqrQAAifBwhxQBxhwCfAAMAsHAAAQCfAABxBwQBwBxAACfMAAAAqrQAACfhwBxQhxBwifAAg");
	this.shape_1.setTransform(179.625,175);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(62.7,341.3,55.2,64.09999999999997), null);


(lib.doubleo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AnRF7Qh8iCAAjVQAAknCdiLQCciJFHAAQD0AACRCJQCWCNAAD2QAABcgjBcQgmBkhFBNQipC6kcAAQk1AAiXidgAgDAQQgoAzgBBMQAABHAjAuQAnA1BHAAQBiAAA3g3QAygwAAhJQAAhJgtgyQgyg3hWAAQhSAAgsA5g");
	this.shape.setTransform(59,53.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,107.3);


(lib.Boogie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgzAlQgWgPAAgWQAAgUAWgQQAWgPAdAAQAfAAAVAPQAWAQAAAUQAAAWgWAPQgVAPgfAAQgdAAgWgPg");
	this.shape.setTransform(938.875,48.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaCOQAAgWAVgkQAVgiAAgfQAAg6gWgqQgWgqAAgNQAAgdAUgNQAXgQAyAAQAyAAAWAOQAUANAAAaQAAANgVAqQgUAqAAAhQAAAtASAsQARArAAAOQAAA7hUABQhdAAAAg1g");
	this.shape_1.setTransform(939.825,77.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AieDOQg+hSAAiOQAAiEA5hDQA+hKCDABQBdgBAwA2QAvA1AABlQAACPhwAlQg4ANgWAGQgiAJAAAXQAAARASAMQAPAJASAAQAeAAAlgTQAcgOANgNQALgLAPgTQANgNAMAAQAIAAAEAGQAFAEAAAJQAABVhBAxQg4AqhNAAQh1AAhAhWgAAFgCQgVAOAAAXQAAAMAJAHQAIAIAQAAQApABAagKQAhgLAAgZQAAgRgRgLQgOgJgUAAQgmAAgXASg");
	this.shape_2.setTransform(993.575,147.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+EsQgagVAAghQAAgYAWg3QAXg2AAgbQAAgcgTgVQgWgYglAAQgjAAgVAUQgWAWgBAoQAAAKASAyQASAzAAAdQAAAngbAVQgbAWgvAAQgwAAgfgUQgggUAAglQAAhAAfhBQAhhBAAhAQgBhKggg1Qghg1ABgjQAAgtAhgWQAfgUA4AAQAwAAAdAOQAhAQAAAdQAAAqgeAjQgeAkAAAeQgBAhAVANQAQALAkAAQAwAAAagRQAVgQAAgXQAAgWgegtQgegtAAgXQAAgjAogRQAegMArAAQB1AAAABNQABA4gnBAQgnBBAAAmQAAAuAkBCQAjBCAABCQAAAugiAZQgfAWgwAAQguAAgbgVg");
	this.shape_3.setTransform(945.7,147.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiED4QgmgcAAg0QAAgpAdhNQAdhMAAgTQAAgVgegGQgegGAAgXQAAgPARgGQAKgEAfgHQBDgUAehTQAPgrAkAAQAiAEADBDQABAiADALQAHAVATAAIAWgCIAXgCQAbAAAAAZQAAARgWANQgfAPgRAKQhHAoAABSQAAAhANARQALAPARAAQANAAAWgOQAWgPAJAAQANAAAIATQAHAQAAATQAABHgyAiQgqAdhJAAQhaAAgsggg");
	this.shape_4.setTransform(901.125,147.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+ErQgagUAAghQAAgYAXg2QAWg3AAgbQAAgcgTgVQgWgYglABQgjgBgVAVQgXAVABAoQgBAKATAyQARAzAAAcQAAAogbAWQgaAVgvAAQgxAAgegUQgigUAAglQAAhAAhhBQAfhBAAhAQAAhKggg1Qggg1gBgjQAAgtAjgWQAegUA4AAQAwAAAdAPQAhAPABAdQAAAqgfAkQgeAjAAAeQAAAhATANQARALAkAAQAxAAAZgSQAVgPABgXQgBgWgegtQgegtAAgXQAAgjApgRQAdgLArAAQB1gBAABNQAAA3gmBBQgnBBAAAmQAAAuAkBCQAkBCAABCQgBAugiAZQgfAWgxAAQgsAAgcgWg");
	this.shape_5.setTransform(1013.95,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiqCoQAAgqAdhMQAdhMAAgTQAAgWgegGQgegGAAgWQAAgPARgGQAKgDAfgIQBDgUAehTQAOgrAlAAQAiAEADBDQABAjAEAKQAGAVAUAAIAWgCQAPgDAIABQAagBAAAaQAAARgWANQgfAPgRALQhHAoAABRQAAAhANARQALAQARAAQANAAAWgPQAWgPAJAAQANAAAIASQAHARAAASQAABIgyAiQgqAdhJgBQisABAAhwg");
	this.shape_6.setTransform(969.375,70.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXDkQgNgvgGgSQgLgegOAAQgLAAgPAdQgMAYgFASQgPA7gMAWQgUAngkAAQggAAgggXQgagTgVgdQgmg6gVhcQgUhUAAhYQAAjlBqAAQAlAAAVAVQAUAVAAAkQAAAhgbBRQgcBSAAAqQAAAiAKAXQANAdAbAAQAVAAAEglIAChRQAEh3BQAAQBaAAALBOQAEAWACArQAEAlAPAQQAQAQAUAAQAUAAAPgQQAagbAAhAQgBgrgfg3Qgfg4AAgiQAAguAdgfQAdgeAqAAQBAAAAhA1QAcArAABCQAAA9gVBdQgSBLgZBHQgdBVglAvQgoA1gvAAQhDAAgfhgg");
	this.shape_7.setTransform(893.45,69.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai1CBQhLg1AAhMQAAhLBLg1QBMg1BpgBQBrABBLA1QBLA1AABLQAABMhLA1QhLA1hrABQhpgBhMg1g");
	this.shape_8.setTransform(637.375,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ak7HsQAAg2AXg1QAMgcAmg/QBJh6AAhqQAAjOhMiTQgnhCgOgeQgZgyAAgtQAAhjBHgvQBOg1CwAAQCxAABLAvQBFArABBeQAAAkgXA1IgxBmQhICUAABvQAACjA+CXIAqBmQATA0AAArQAABfg/A1QhKA+icAAQlFAAAAi6g");
	this.shape_9.setTransform(640.7,131.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0)").s().p("AnQF7Qh9iCAAjVQAAknCdiLQCciJFHAAQD0AACRCJQCWCNAAD2QAABcgjBcQgmBkhGBNQinC6kcAAQk2AAiWidgAgEAQQgnAzAABMQAABHAiAuQAnA1BIAAQBgAAA4g3QAygwAAhJQAAhJgtgyQgyg3hXAAQhSAAgsA5g");
	this.shape_10.setTransform(350.1,150.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0)").s().p("AnQF7Qh9iCAAjVQAAknCdiLQCbiJFIAAQDzAACSCJQCWCNAAD2QAABcgjBcQglBkhHBNQinC6kdAAQk1AAiWidgAgEAQQgnAzAABMQAABHAjAuQAmA1BIAAQBgAAA4g3QAygwAAhJQAAhJgtgyQgyg3hXAAQhSAAgsA5g");
	this.shape_11.setTransform(227.35,150.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNPiQhXgwgcgMQg+gbgyAAQgvAAgrAYQgNAGg/AtQhpBKiGAAQhQAAgug4QgngwABg/QgBgwAZhLQAfhRAKglQAtiyAAp+QAAkBgGhWQgIiDgfg1QgyhTgBhOQAAg8AsgpQAsgqBAAAQApAAArANIBOAdQBvAqB5AAQA1AABHgaQASgGB0gyQDAhSCcAAQDDAABlCNQBWB2AACzQAABxgnBoQgoBqhJBJQgsAshoArQgpARgPALQgWAQAAAVQAAAbAcAUQATANA1AVQCDAzA6A6QBQBQApBjQAoBdAABhQgBBfgjBoQgmBuhEBaQijDXj3AAQhzAAidhWgAj0CkQgsBSAABuQAABVAnA5QAtBDBTAAQBLAAA1g3QA9g/AAhtQABhMgxhUQg6hmhWAAQhJAAgvBYgAj0o6Qg+BFAAB9QAABWAnBAQAuBMBSAAQBmAABAhUQA8hPgBhvQAAhWgug6QgzhAhZAAQhXAAg5A+g");
	this.shape_12.setTransform(81.05,108.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AokLHQjVkbABnrQAAnIDFjpQDWj9HEAAQFBAACmC6QCjC2gBFbQABEih5CeQhdB5iuA5Qg4AShXASQhjAVgZAHQh4AhAABLQABA/A9AlQA0AfBBAAQBlAAB/hAQBhgyAsgsQAlglA3hAQAugtApAAQAaAAAPASQAQASgBAeQAAEmjeCnQjACQkMAAQmWAAjdkngAAQgMQhJA2AABPQAAAoAeAaQAfAdA2AAQCQAABaggQBwgoAAhTQAAhBg6glQgxgfhFAAQiEAAhQA8g");
	this.shape_13.setTransform(755.5,100.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ApYMIQkukGAAnTQAAjQBRjDQBPi/CRiWQCSiWC+hUQDHhWDbgBQC+AACmBVQDEBjAACYQgBAxgeAcQgcAbgoAAQghAAgjgPQgbgNgmgcQgzgig5gTQg6gRg7gBQjbABiMDKQiFC/AAESQAADsBfCfQBqC2C+AAQBPAABTg5QBehBAAhXQAAg4gqhDQgegxgvgtQgvgugXgnQgXgmABglQgBhVBog1QBkg1CVAAQCWAABlA1QBoA4AABbQAAAxg7BXQg8BXAAAjQAAAqA0BlQA1BlAAA/QAADgjzCNQjaB9kkABQnGAAkajzg");
	this.shape_14.setTransform(509.95,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1039.4,216.1);


(lib.Beatles = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgeStQj8gCixhRQixhSheiMQheiMAAivQAAg+AUg9QAVg9AngpQAmgrA4gCQAnACAYAfQAYAdAeApQAhAnA6AdQA7AeBuACQBTAAA3gxQA0gwAChZQgChug6g+Qg4g7hVgtQhVgshVhAQhUg/g6h1Qg6h4gCjQQAAitBUiOQBSiNCehWQCfhVDjgCQDCAACiAuQCiAuBjBjQBlBjABCdQAABBgiApQgiApg1AAQg6gCgegmQgdgnghgxQgigzhEgmQhEgniHgCQhAAAg1AnQg1AogDBHQADBhBQA/QBQA/B2A5QB1A6B4BTQB1BSBQCIQBQCIAEDcQgEFOh8DJQh7DJjCBaQi+BYjUAAIgIgBg");
	this.shape.setTransform(1191.075,215.1513);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnCP7QjcibhukZQhukagBl3QgClWBmj2QBlj3DfiFQDfiFFsgCQF8ACC/DXQC/DYAAGUQgDEnhcCcQhbCfiGBCQiFBEiHAYQiHAZhaAeQhbAegDBSQABA2AhAjQAiAgAwARQAyAPAqAAQBcgCBbgjQBagkBEgrQBEgsAYgYIBth3QAugyA3gDQAgACARAUQARAUAAAiQgCC7hHCGQhGCHh2BVQh1BXiMApQiNApiMAAQlFgCjaidgAELhUQiiADhXBCQhUBCAABbQAAAtAiAhQAjAgBCAAQBfACBcgRQBdgPA9goQA9gnAChHQgDhThBgmQg8gjhHAAIgHAAg");
	this.shape_1.setTransform(1011.5739,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsFTJQgzg3AChUQABi0AfiUQAfiWAuiTQAuiSAuivQAuiqAfjnQAejkACk6QAAh/ArhuQAqhrBahCQBdhDCQgCQCmAABjBeQBhBcAEC/QgECAg4ByQg4B0hUBwQhSBxhUB3QhTB3g6CIQg4CIgCCkQAAB2A9BAQA8BBB7AAQCAgCBjglQBlgmBOgzQBOgxBBgmQBBglA8gCQA2AAAuAnQAuAmAdA5QAdA6AAA+QgDDMi3CaQi0CZk/BWQk8BUmbACQiDgCg1g3g");
	this.shape_2.setTransform(834.7729,217.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIRpQkBgBiZg6Qibg8hChlQhDhmACiAQABh0Ajh6QAjh7Ash2QAvh1AkhiQAhhlAChGQgBg/glgUQglgVgvgGQgwgHgkgWQgkgWgChBQABg3AsgSQAsgVBGgOQBIgMBVglQBTgmBShYQBShaBAitQAVhAAzgzQAxg0BYgDQBiAPAZBUQAZBTABBoQAABoASBPQAVBOBVAFQAngCAwgIQAygHAsgCQAvAAAfAVQAdAWACA8QgDA/g5AnQg4AnhVAnQhUAmhVA9QhUA8g4BoQg6BngBCqQADCPAvA/QAyA+A/gCQAygCAtgdIBZg4QArgdAngDQAmABAZAkQAZAkAOAxQAMAyAAAsQgCDOheB4QhdB3iWAxQiTAwiqAAIgKAAg");
	this.shape_3.setTransform(680.1,212.9272);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AIwTqQhlgbhJg/QhJg/gEhrQACgyAJgxQAIgyACgxQgCh7hqhMQhohLiugCQiYAAhmBCQhmBFgFCBQADBBAPAxQAQAyABAuQgBBag3A/Qg4BBhZAiQhYAihqAAQizgChjhQQhkhSgCiLQADh2A6iNQA6iQBXibICsk9QBWifA7idQA6icACiOQgChBgRhGIgkiLQgRhGgBhEQgCheA6hSQA6hTCNg0QCOgzD4gBQDdABCFAuQCFAwA8BNQA7BOgBBcQgCA/gRBBQgRBCgQBFQgRBEgBBJQABB7AhCIQAiCHAzCKQA2CXBUCDQBUCBBVBxQBTByA4BmQA5BmADBiQgCBYg6BQQg4BPhcAzQheAxhrACQhXAAhmgagAiKlMQg6AugpBQQgnBQgCBoQAAA1AYA6QAYA6AzAnQAyAoBQABQBjgDA+hQQA7hQAChzQAAg1gThNQgShMgtg8Qgqg6hHgDQg6AAg6Aug");
	this.shape_4.setTransform(488.425,217.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnCP7QjcibhukZQhukagBl3QgClWBmj2QBlj3DfiFQDfiFFsgCQF8ACC/DXQC/DYAAGUQgDEnhcCcQhbCfiGBCQiFBEiHAYQiHAZhaAeQhbAegDBSQABA2AhAjQAiAgAwARQAyAPAqAAQBcgCBbgjQBagkBEgrQBEgsAYgYIBth3QAugyA3gDQAgACARAUQARAUAAAiQgCC7hHCGQhGCHh2BVQh1BXiMApQiNApiMAAQlFgCjaidgAELhUQiiADhXBCQhUBCAABbQAAAtAiAhQAjAgBCAAQBfACBcgRQBdgPA9goQA9gnAChHQgDhThBgmQg8gjhHAAIgHAAg");
	this.shape_5.setTransform(293.5739,213.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABQS7QhjgvhXgyQhXgvhZgDQhSADg0ApQg3AqhJApQhKAriKADQhEgCgqgeQgrgfgTgsQgUgsAAgtQADhIAahHQAbhJAUhCQAOgvAMhsQAMhuAHjCQAIjCAAkvQACj8gJiWQgIiVgmhCQgPgWgUgzQgWgzgChBQAChIAxgvQAxguBPgCQBGACA6AXQA4AXBLAXQBNAZB8ABQBegDBmguQBlguB9guQB8gvClgDQCiADBjBMQBjBMAsB0QArB2AAB8QAACFguB5QguB6hXBYQg4Azg8AZQg9AagrAUQgrAVgBAiQABAsA3AZQA3AZBMAdQBPAhBHBCQBhBjAuBvQAuBwAABvQAABvgqB7QgpB8hSBtQhSBvh5BGQh5BGidABQh8gDhjgygAj4CKQgqAwgYBLQgYBJAABTQAABcAuBKQAuBLBoADQBSAABDhAQBGhBADiIQAAgxgZhHQgahIgwg4Qgzg4hLgEQg8ADgrAvgAkdqbQhGBJgECaQAAA6ATA9QAVA9AqApQAtApBFACQBUgCA8gsQA5guAghIQAfhJAAhUQAAhhg3hHQg1hIhvgEQhhAAhGBKg");
	this.shape_6.setTransform(101.525,222.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1279.7,422.9);


(lib.abbey_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,14.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(15,14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.tiktok_button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#80CAD4").s().p("AAAgBQADgBgBADIAAABQgEAAACgDg");
	this.shape.setTransform(27.9413,78.0563);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80CAD4").s().p("AgBAAIAAgBQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIgBAAIAAABQgDAAABgCg");
	this.shape_1.setTransform(28.265,78.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80CAD4").s().p("AABABIAAABQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAABg");
	this.shape_2.setTransform(28.575,78.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80CAD4").s().p("AgBgBIACAAIAAABIABAAIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAQgCAAgBgDg");
	this.shape_3.setTransform(37.8333,71.2778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#80CAD4").s().p("Ag1C3IgDgEQgvgtgNhCQgNhCAcg8QAcg9A5giQA5gjBCAFQAOABAAAKIgBASQiXAMgtCKQgeBYAzBVIAGAHQADAEgBAEIgDABIgDgCg");
	this.shape_4.setTransform(32.6414,59.4965);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1455E").s().p("AhIBUQgNggAMghQALggAfgTQAegSAgAGQAJACADgDQADgCAAgJIABhLQAYgCAEAEQAEAEAAAYIABBKQAAAJgDADQgDACgJgBQgugIghAfQgiAgADAvQACARAOAcQgfgQgMghg");
	this.shape_5.setTransform(40.0745,57.2795);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80CAD4").s().p("Ah9ECQAHAAANADQAMACAHAAIADAAQAogEAagbQAZgcAAgnIAAm2QAAgLAEgEQADgDALAAQAoACAogCQALAAAEADQAFADgCALQAAAEACAIIghABQgUABgNgBQgMgBgEAFQgDAEAAAMQABDZgBDYQAAApgYAbQgWAbgpAEIgNABQgqAAgYgig");
	this.shape_6.setTransform(50.625,45.6369);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1455E").s().p("AinC+IgHgEQgEgDgBgFQA8AcAwAAIABAAQBUgBA+g7QA+g8AChVIAAjbIAAgRQAFAAAFADIAHAFIAXAMIgDAJIgCAAQgCAEABAFIAAAIIAABqQABBCgBAnQgDCGh1A5QgvAXguAAQhBAAg/gug");
	this.shape_7.setTransform(48.975,62.9365);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1455E").s().p("AgUgPQgJgSAAgNIAEgBQASAAAEADQADADABARQAEAdAZArQgfgSgTgtg");
	this.shape_8.setTransform(66.35,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80CAD4").s().p("AgngVQAtATAbABQAHAAAAAGIgBASQgvgKgfgig");
	this.shape_9.setTransform(74.9766,32.75);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(140.85,28.1,1,1,0,0,0,179.7,350);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1455E").s().p("AA/A7QhJgEg9goIgDgCIgEgBIADgJQAzAYA4ADQAHAAADgCQACgDAAgGIABhOQAZAEAEAFQAEAFAAAZIABBBQAAAJgDADQgDADgHAAIgDgBg");
	this.shape_10.setTransform(74.5531,41.0536);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDWAACWCXQCXCXAADUQAADViXCXQiWCXjWAAQjUAAiXiXg");
	this.shape_11.setTransform(51.5,51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-321.9,359.2,700.0999999999999);


(lib.navigation1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#80CAD4").s().p("AAAgBQADgBgBADIAAABQgEAAACgDg");
	this.shape.setTransform(1471.4913,78.0563);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80CAD4").s().p("AgBAAIAAgBQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIgBAAIAAABQgDAAABgCg");
	this.shape_1.setTransform(1471.815,78.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#80CAD4").s().p("AABABIAAABQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAABg");
	this.shape_2.setTransform(1472.125,78.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80CAD4").s().p("AgBgBIACAAIAAABIABAAIAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAAQgCAAgBgDg");
	this.shape_3.setTransform(1481.3833,71.2778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#80CAD4").s().p("Ag1C3IgDgEQgvgtgNhCQgNhCAcg8QAcg9A5giQA5gjBCAFQAOABAAAKIgBASQiXAMgtCKQgeBYAzBVIAGAHQADAEgBAEIgDABIgDgCg");
	this.shape_4.setTransform(1476.1914,59.4965);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1455E").s().p("AhIBUQgNggAMghQALggAfgTQAegSAgAGQAJACADgDQADgCAAgJIABhLQAYgCAEAEQAEAEAAAYIABBKQAAAJgDADQgDACgJgBQgugIghAfQgiAgADAvQACARAOAcQgfgQgMghg");
	this.shape_5.setTransform(1483.6245,57.2795);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80CAD4").s().p("Ah9ECQAHAAANADQAMACAHAAIADAAQAogEAagbQAZgcAAgnIAAm2QAAgLAEgEQADgDALAAQAoACAogCQALAAAEADQAFADgCALQAAAEACAIIghABQgUABgNgBQgMgBgEAFQgDAEAAAMQABDZgBDYQAAApgYAbQgWAbgpAEIgNABQgqAAgYgig");
	this.shape_6.setTransform(1494.175,45.6369);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1455E").s().p("AinC+IgHgEQgEgDgBgFQA8AcAwAAIABAAQBUgBA+g7QA+g8AChVIAAjbIAAgRQAFAAAFADIAHAFIAXAMIgDAJIgCAAQgCAEABAFIAAAIIAABqQABBCgBAnQgDCGh1A5QgvAXguAAQhBAAg/gug");
	this.shape_7.setTransform(1492.525,62.9365);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1455E").s().p("AgUgPQgJgSAAgNIAEgBQASAAAEADQADADABARQAEAdAZArQgfgSgTgtg");
	this.shape_8.setTransform(1509.9,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80CAD4").s().p("AgngVQAtATAbABQAHAAAAAGIgBASQgvgKgfgig");
	this.shape_9.setTransform(1518.5266,32.75);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(1584.4,28.1,1,1,0,0,0,179.7,350);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1455E").s().p("AA/A7QhJgEg9goIgDgCIgEgBIADgJQAzAYA4ADQAHAAADgCQACgDAAgGIABhOQAZAEAEAFQAEAFAAAZIABBBQAAAJgDADQgDADgHAAIgDgBg");
	this.shape_10.setTransform(1518.1031,41.0536);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlrFsQiXiXAAjVQAAjUCXiXQCXiXDUAAQDWAACWCXQCXCXAADUQAADViXCXQiWCXjWAAQjUAAiXiXg");
	this.shape_11.setTransform(1495.05,51.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EglnACYQg4gzgJhKIrlAAQgLBJg4AxQg5AxhLAAQhLAAg4gxQg4gxgLhJIrlAAQgLBJg4AxQg4AxhLAAQhLAAg5gxQg4gxgKhJIrlAAQgLBJg4AxQg5AxhLAAQhSAAg7g6Qg3g4gDhMIABATIrkAAQgLBKg4AxQg5AxhLAAQhLAAg4gxQg4gxgLhKQgCgMAAgPQAAgNACgLQAJhLA4gyQA5gzBMAAQBMAAA5AzQA5AyAJBLILkAAQAJhLA4gzQA5gzBMAAQBNAAA4AzQA5AyAJBLILkAAQAJhLA5gyQA5gzBMAAQBMAAA5AzQA4AyAJBLILlAAQAJhLA4gyQA5gzBMAAQBNAAA4AzQA5AyAJBLILlAAQAJhLA4gyQA5gzBMAAQBLAAA5AzQA4AyAKBLILlAAQAJhLA4gyQA5gzBMAAQBMAAA5AzQA5AyAJBLILkAAQAJhLA5gyQA5gzBLAAQBMAAA5AzQA4AyAJBLILlAAQAJhLA4gyQA5gzBMAAQBMAAA6AzQA4AyAJBLILkAAQAJhLA5gyQA5gzBMAAQBMAAA5AzQA4AyAJBLILlAAQAJhLA4gyQA5gzBMAAQBMAAA5AzQA5AyAJBLILkAAQAJhLA5gyQA5gzBMAAQBMAAA5AzQA5AyAJBLILkAAQAJhLA5gyQA4gzBNAAQBMAAA5AzQA4AyAJBLILkAAQAJhLA5gyQA5gzBMAAQBTAAA6A7QA7A6AABTQAABSg7A7Qg6A6hTAAQhLAAg5gxQg4gxgKhJIrlAAQgLBJg4AxQg4AxhLAAQhLAAg5gxQg4gxgLhJIrlAAQgKBJg4AxQg5AxhLAAQhLAAg5gxQg4gxgKhJIrlAAQgLBJg4AxQg5AxhLAAQhLAAg4gxQg4gxgLhJIrlAAQgKBJg4AxQg5AxhLAAQhLAAg5gxQg4gxgKhJIrlAAQgLBJg4AxQg5AxhLAAQhLAAg4gxQg4gxgLhJIrlAAQgKBJg4AxQg5AxhLAAQhKAAg5gxQg4gxgKhJIrlAAQgLBJg4AxQg5AxhLAAQhLAAg4gxQg4gxgLhJIrlAAQgKBKg4AzQg5AyhLAAQhMAAg5gygEglDgByQgpAjgKA2QgCAOAAALQAAANACAOQAKA1ApAkQAqAkA3AAQA3AAAqgkQApgkAKg1QACgOAAgNQAAgLgCgOQgKg2gpgjQgqgkg3AAQg3AAgqAkgEhsJgByQgqAkgJA2QgCAKAAAOQAAAMADAPQAKA1ApAiQAqAjA2AAQA3AAApgjQAqgiAKg1QACgLAAgQQAAgOgCgKQgIg2gqgkQgqgkg4AAQg3AAgqAkgEBpHgBzQgqAkgIA2QgCAKAAAOQAAAOADAOQAKA0ApAiQApAjA3AAQA+AAAsgsQAsgsAAg9QAAg+gsgsQgsgsg+AAQg4AAgqAkgEBXWgBzQgqAkgJA2IgCAYQAAAOADAOQAKA0ApAiQAqAjA3AAQA2AAApgjQAqgiAKg0QADgOAAgOIgCgYQgJg2gqgkQgqgkg3AAQg4AAgqAkgEBFkgBzQgqAkgIA2QgCAKAAAOQAAAOADAOQAKA0ApAiQAqAjA2AAQA2AAAqgjQApgiAKg0QADgOAAgOIgCgYQgJg2gpgkQgrgkg3AAQg3AAgrAkgEAzzgBzQgqAkgJA2QgCAKAAAOQAAAOADAOQAKA0ApAiQAqAjA2AAQA3AAApgjQAqgiAKg0QACgMAAgQQAAgOgCgKQgIg2gqgkQgqgkg4AAQg3AAgqAkgEAiBgBzQgqAkgIA2QgCAKAAAOQAAAMACAQQAKA0AqAiQApAjA3AAQA2AAAqgjQApgiAKg0QADgMAAgQQAAgOgCgKQgJg2gqgkQgqgkg3AAQg4AAgqAkgAQQhzQgqAkgJA2IgCAYQAAAOADAOQAKA0ApAiQAqAjA2AAQA3AAApgjQAqgiAKg0QADgOAAgOIgCgYQgJg2gqgkQgqgkg4AAQg3AAgqAkgAhhhzQgqAkgIA2IgCAYQAAAOADAOQAKA0ApAiQApAjA2AAQA2AAAqgjQApgiAKg0QADgMAAgQQAAgOgCgKQgJg2gqgkQgqgkg3AAQg3AAgqAkgAzShzQgqAkgJA2QgCAKAAAOQAAAOADAOQAKA0ApAiQAqAjA2AAQA3AAApgjQAqgiAKg0QACgMAAgQQAAgOgCgKQgIg2gqgkQgqgkg4AAQg3AAgqAkgEg21gBzQgqAkgJA2QgCAKAAAOQAAAOADAOQAKA0ApAiQAqAjA2AAQA3AAApgjQAqgiAKg0QACgMAAgQQAAgOgCgKQgIg2gqgkQgqgkg4AAQg3AAgqAkgEhIngBzQgqAkgIA2QgCAKAAAOQAAAOADAOQAKA0ApAiQApAjA3AAQA2AAAqgjQApgiAKg0QADgMAAgQQAAgOgCgKQgJg2gqgkQgqgkg3AAQg4AAgqAkgEhaggBrQgsAsAAA+QAAA9AsAsQArAsA+AAQA3AAApgjQAqgiAKg0QACgMAAgQQAAgOgCgKQgIg2gqgkQgqgkg4AAQg+AAgrAsg");
	this.shape_12.setTransform(702.475,51.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-321.9,1764,700.0999999999999);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [104];
	// timeline functions:
	this.frame_104 = function() {
		/* Stop at This Frame
		The Animate timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.please_button.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("../BoogieBeatles/HTML/please.html", "_self");
		}
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.with_button.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("../BoogieBeatles/HTML/with.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.hard_button.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("../BoogieBeatles/HTML/hard.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.sale_button.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("../BoogieBeatles/HTML/sale.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.help_button.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("../BoogieBeatles/HTML/help.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.rubber_button.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("../BoogieBeatles/HTML/rubber.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.revolver_button.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("../BoogieBeatles/HTML/revolver.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.pepper_button.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("../BoogieBeatles/HTML/pepper.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.white_button.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("../BoogieBeatles/HTML/white.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.yellow_button.addEventListener("click", fl_ClickToGoToWebPage_14);
		
		function fl_ClickToGoToWebPage_14() {
			window.open("../BoogieBeatles/HTML/yellow.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.abbey_button.addEventListener("click", fl_ClickToGoToWebPage_15);
		
		function fl_ClickToGoToWebPage_15() {
			window.open("../BoogieBeatles/HTML/abbey.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.let_button.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("../BoogieBeatles/HTML/let.html", "_self");
		}
		
		
		this.tour_button.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("../BoogieBeatles/HTML/tour.html", "_self");
		}
		
		this.tiktok_button.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("https://www.tiktok.com/@boogiewiththebeatles?", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// Beatles
	this.instance = new lib.Beatles("synched",0);
	this.instance.setTransform(960,512.75,1,1,0,0,0,639.8,211.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({startPosition:0},0).to({startPosition:0},45).wait(1));

	// Boogie
	this.instance_1 = new lib.Boogie("synched",0);
	this.instance_1.setTransform(979.2,279.25,1,1,0,0,0,519.7,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105));

	// subheading
	this.instance_2 = new lib.subheading("synched",0);
	this.instance_2.setTransform(960,733.05,1,1,0,0,0,579.7,30.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},45).wait(1));

	// right_o
	this.instance_3 = new lib.doubleo("synched",0);
	this.instance_3.setTransform(1900.2,979.6,0.4408,0.4408,0,0,0,59,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:53.7,rotation:-29.9988,x:1858.95,y:915.8},2).to({regY:53.9,rotation:-74.9997,x:1800.3,y:843.25},2).to({regX:58.9,scaleX:0.5257,scaleY:0.5257,rotation:-119.9978,x:1736.6,y:715.7},2).to({regX:58.8,rotation:-179.9983,x:1689.1,y:640.6},2).to({regY:53.8,rotation:-254.9981,x:1642.9,y:560.7},2).to({regX:59.1,scaleX:0.6185,scaleY:0.6185,rotation:-329.9984,x:1599.9,y:512.85},2).to({rotation:-374.9976,x:1648,y:479.05},2).to({regX:59,regY:53.9,rotation:-449.9986,x:1728.05,y:428.85},2).to({regY:54,rotation:-494.998,x:1780.45,y:368.8},2).to({regY:53.9,rotation:-554.9983,x:1840.45,y:296.55},2).to({regX:59.1,regY:53.8,scaleX:0.756,scaleY:0.756,rotation:-599.9964,x:1872.9,y:253.15},2).to({regY:53.7,rotation:-644.995,x:1836.75,y:169.45},2).to({scaleX:0.8724,scaleY:0.8724,rotation:-689.9947,x:1756.65,y:139.4},2).to({rotation:-734.9936,x:1661.75,y:125.6},2).to({regY:53.8,rotation:-779.9932,x:1570.3,y:36.75},2).to({rotation:-839.9925,x:1454.25,y:18.95},2).to({regX:59,regY:53.7,rotation:-914.9915,x:1362.7,y:33.95},2).to({regX:59.1,regY:53.6,rotation:-959.9912,x:1260.1,y:58.5},2).to({regX:59,regY:53.5,scaleX:0.9974,scaleY:0.9974,rotation:-1004.99,x:1130.25,y:61.85},2).to({rotation:-1049.9895,x:1012.7,y:95.4},2).to({rotation:-1139.9895,x:881.5,y:147.35},2).to({regX:58.9,rotation:-1169.9895,x:811.7,y:204.75},2).to({rotation:-1199.9882,x:788.45,y:242.55},2).to({scaleX:0.9973,scaleY:0.9973,rotation:-1229.9878,x:763.8,y:290.4},2).to({regX:58.8,rotation:-1259.9877,x:787,y:321.9},2).to({regX:58.9,regY:53.4,rotation:-1319.9869,x:795.1,y:322},3).to({rotation:-1409.9869,x:795.2,y:322.1},2).to({regX:59,regY:53.6,scaleX:1,scaleY:1,rotation:-1440,x:809.25,y:321.35},2).wait(48));

	// Left_o
	this.instance_4 = new lib.doubleo("synched",0);
	this.instance_4.setTransform(131.05,-46.4,1,1,0,0,0,59,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:59.1,scaleX:0.8303,x:131.15,y:93.6},2).to({scaleX:0.5979,scaleY:1.3504,y:370.4},2).to({regY:53.8,scaleX:0.4526,scaleY:1.6694,y:671.4},2).to({regX:59.2,scaleX:0.9744,scaleY:0.4297,x:131.25,y:967},2).to({regX:59.6,regY:54.1,scaleX:1.0327,scaleY:1.0323,x:131.55,y:890.45},2).to({rotation:29.9998,x:187.95,y:796.4},2).to({scaleX:1.0326,scaleY:1.0322,rotation:59.9993,x:241.65,y:700.75},2).to({regX:59,regY:53.6,scaleY:0.7135,rotation:90,x:296.85,y:577.1},2).to({regX:59.1,regY:53.7,scaleY:1.0865,rotation:45.0011,x:235.95,y:525.9},2).to({rotation:15.0015,x:74,y:418.1},2).to({regX:58.9,regY:53.9,scaleX:0.7,scaleY:1.4547,rotation:-14.9975,x:32.8,y:375.65},2).to({regX:59,regY:53.6,scaleX:1,scaleY:1,rotation:29.9992,x:228.35,y:247.7},2).to({rotation:44.9988,x:323.3,y:95.25},2).to({regX:59.1,regY:53.5,rotation:74.9985,x:392.6,y:56.8},2).to({scaleX:0.9999,scaleY:0.9999,rotation:119.9978,x:535.5,y:93.5},2).to({regY:53.4,rotation:164.9969,x:640.75,y:121.8},2).to({regY:53.5,rotation:239.9966,x:687.05,y:170.45},2).to({rotation:359.9974,x:687.15,y:273.05},2).to({regY:53.6,scaleY:0.6167,rotation:359.9986,y:334.4},2).to({regX:59.2,regY:53.8,scaleX:0.6504,scaleY:1.0468,rotation:359.9992,x:687.2,y:293.45},2).to({regX:59.4,regY:53.9,scaleX:0.4318,x:687.3,y:245.45},2).to({regX:59.6,scaleX:0.2565,scaleY:1.4292,rotation:359.9994,y:161.35},2).to({regX:59.7,regY:54,scaleX:0.7076,scaleY:1.0591,rotation:360,y:161.5},2).to({scaleY:0.7876,y:115.55},2).to({regX:59.9,regY:54.2,scaleX:0.5274,scaleY:1.0349,x:687.4,y:166.95},2).to({regX:59.8,scaleX:0.3461,x:687.35,y:227.35},2).to({regX:60,regY:54.4,scaleX:0.2335,scaleY:1.3976,y:276.2},2).to({regX:60.1,scaleX:0.9355,scaleY:0.5522,x:687.45,y:348.5},2).to({regX:59,regY:53.6,scaleX:1,scaleY:1,y:322.1},2).wait(47));

	// Layer_1
	this.tiktok_button = new lib.tiktok_button("synched",0);
	this.tiktok_button.name = "tiktok_button";
	this.tiktok_button.setTransform(1771.1,869.6,1,1,0,0,0,140.8,28.1);
	this.tiktok_button._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tiktok_button).wait(104).to({_off:false},0).wait(1));

	// navigation
	this.instance_5 = new lib.navigation1("synched",0);
	this.instance_5.setTransform(1068.75,869.6,1,1,0,0,0,882,28.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({regY:28.2,x:1068.8,y:869.7,alpha:1},45).wait(1));

	// button13
	this.let_button = new lib.let_button();
	this.let_button.name = "let_button";
	this.let_button.setTransform(1572.1,892.65,1,0.9995,0,0,0,15.2,15.1);
	new cjs.ButtonHelper(this.let_button, 0, 1, 2, false, new lib.let_button(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgkAkgwAHQgLABgLAAQg+AAgrgsQgGgGgFgGQgOgSgJgUQgKgZAAgfQAAgPADgPQACgNAFgMQAIgTAOgRQAAgBABgBQAFgGAGgGQArgsA+AAQALAAALABQAwAHAkAkQAHAHAGAHQAVAbAHAiQADAPAAAPg");
	this.shape.setTransform(1572.05,892.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30B4BB").s().p("AhpBqIgLgMQgOgSgJgUQgKgZAAgfQAAgPADgPQADgNAEgMQAIgUANgQIACgCIALgMQAsgsA9AAQALAAAKABQAxAHAkAkIANAOQAVAbAHAiQADAPAAAPQAAA+gsAsQgkAkgxAHIgVABQg9AAgsgsg");
	this.shape_1.setTransform(1572.05,892.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.let_button}]},104).wait(1));

	// button12
	this.abbey_button = new lib.abbey_button();
	this.abbey_button.name = "abbey_button";
	this.abbey_button.setTransform(1458.8,892.8,1,0.9995,0,0,0,15.2,15.1);
	new cjs.ButtonHelper(this.abbey_button, 0, 1, 2, false, new lib.abbey_button(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+grAsQgsAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAAsAsQArAsAAA9g");
	this.shape_2.setTransform(1458.75,892.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.abbey_button}]},104).wait(1));

	// button11
	this.yellow_button = new lib.yellow_button();
	this.yellow_button.name = "yellow_button";
	this.yellow_button.setTransform(1344.7,892.8,1,0.9995,0,0,0,15.2,15.1);
	new cjs.ButtonHelper(this.yellow_button, 0, 1, 2, false, new lib.yellow_button(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg+AAgrgsQgsgsAAg+QAAg+AsgrQArgsA+AAQA/AAArAsQAsArAAA+g");
	this.shape_3.setTransform(1344.65,892.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");
	this.shape_4.setTransform(1344.65,892.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.yellow_button}]},104).wait(1));

	// button10
	this.white_button = new lib.white_button();
	this.white_button.name = "white_button";
	this.white_button.setTransform(1230.15,893.6,1,0.9995,0,0,0,15.2,15.1);
	this.white_button._off = true;
	new cjs.ButtonHelper(this.white_button, 0, 1, 2, false, new lib.white_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.white_button).wait(104).to({_off:false},0).wait(1));

	// button9
	this.tour_button = new lib.tour_button();
	this.tour_button.name = "tour_button";
	this.tour_button.setTransform(1116,892.65,1,0.9995,0,0,0,15.2,15.1);
	this.tour_button._off = true;
	new cjs.ButtonHelper(this.tour_button, 0, 1, 2, false, new lib.tour_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tour_button).wait(104).to({_off:false},0).wait(1));

	// button8
	this.pepper_button = new lib.pepper_button();
	this.pepper_button.name = "pepper_button";
	this.pepper_button.setTransform(1003.15,893.75,1,0.9995,0,0,0,15.2,15.1);
	this.pepper_button._off = true;
	new cjs.ButtonHelper(this.pepper_button, 0, 1, 2, false, new lib.pepper_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pepper_button).wait(104).to({_off:false},0).wait(1));

	// button7
	this.revolver_button = new lib.revolver_button();
	this.revolver_button.name = "revolver_button";
	this.revolver_button.setTransform(889.3,892.75,1,0.9995,0,0,0,15.2,15.1);
	this.revolver_button._off = true;
	new cjs.ButtonHelper(this.revolver_button, 0, 1, 2, false, new lib.revolver_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.revolver_button).wait(104).to({_off:false},0).wait(1));

	// button6
	this.rubber_button = new lib.rubber_button();
	this.rubber_button.name = "rubber_button";
	this.rubber_button.setTransform(775.7,892.75,1,0.9995,0,0,0,15.1,15.1);
	this.rubber_button._off = true;
	new cjs.ButtonHelper(this.rubber_button, 0, 1, 2, false, new lib.rubber_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rubber_button).wait(104).to({_off:false},0).wait(1));

	// button5
	this.help_button = new lib.help_button();
	this.help_button.name = "help_button";
	this.help_button.setTransform(662.05,892.65,1,0.9995,0,0,0,15.1,15.1);
	this.help_button._off = true;
	new cjs.ButtonHelper(this.help_button, 0, 1, 2, false, new lib.help_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.help_button).wait(104).to({_off:false},0).wait(1));

	// button4
	this.sale_button = new lib.sale_button();
	this.sale_button.name = "sale_button";
	this.sale_button.setTransform(547.8,892.75,1,0.9995,0,0,0,15.1,15.1);
	this.sale_button._off = true;
	new cjs.ButtonHelper(this.sale_button, 0, 1, 2, false, new lib.sale_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sale_button).wait(104).to({_off:false},0).wait(1));

	// button2
	this.with_button = new lib.with_button();
	this.with_button.name = "with_button";
	this.with_button.setTransform(320.7,893.25,1,0.9995,0,0,0,15.6,15.6);
	this.with_button._off = true;
	new cjs.ButtonHelper(this.with_button, 0, 1, 2, false, new lib.with_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.with_button).wait(104).to({_off:false},0).wait(1));

	// button3
	this.hard_button = new lib.hard_button();
	this.hard_button.name = "hard_button";
	this.hard_button.setTransform(434.75,892.75,1,0.9995,0,0,0,15.1,15.1);
	this.hard_button._off = true;
	new cjs.ButtonHelper(this.hard_button, 0, 1, 2, false, new lib.hard_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hard_button).wait(104).to({_off:false},0).wait(1));

	// button1
	this.please_button = new lib.please_button();
	this.please_button.name = "please_button";
	this.please_button.setTransform(206.95,893.2,0.9365,0.9361,0,0,0,15.7,15.7);
	this.please_button._off = true;
	new cjs.ButtonHelper(this.please_button, 0, 1, 2, false, new lib.please_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.please_button).wait(104).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(946.8,395,979.4000000000001,608.3);
// library properties:
lib.properties = {
	id: 'D6DC5DD45A6942419388CE0334E0F48A',
	width: 1920,
	height: 990,
	fps: 24,
	color: "#30B4BB",
	opacity: 1.00,
	manifest: [],
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
an.compositions['D6DC5DD45A6942419388CE0334E0F48A'] = {
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