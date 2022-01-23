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
	this.shape.graphics.f("#000000").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape.setTransform(15,14.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

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
(lib.navigation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
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
			window.open("please.html", "_self");
		}
		
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.with_button.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("with.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.hard_button.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("hard.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.sale_button.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("sale.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.help_button.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("help.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.rubber_button.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("rubber.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.revolver_button.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("revolver.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.pepper_button.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("pepper.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.white_button.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("white.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.yellow_button.addEventListener("click", fl_ClickToGoToWebPage_14);
		
		function fl_ClickToGoToWebPage_14() {
			window.open("yellow.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.abbey_button.addEventListener("click", fl_ClickToGoToWebPage_15);
		
		function fl_ClickToGoToWebPage_15() {
			window.open("abbey.html", "_self");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.let_button.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("let.html", "_self");
		}
		
		
		this.tour_button.addEventListener("click", fl_ClickToGoToWebPage_17);
		
		function fl_ClickToGoToWebPage_17() {
			window.open("tour.html", "_self");
		}
		this.tiktok_button.addEventListener("click", fl_ClickToGoToWebPage_18);
		
		function fl_ClickToGoToWebPage_18() {
			window.open("https://www.tiktok.com/@boogiewiththebeatles?", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiktok
	this.tiktok_button = new lib.tiktok_button("synched",0);
	this.tiktok_button.name = "tiktok_button";
	this.tiktok_button.setTransform(1584.8,28.1,1,1,0,0,0,140.8,28.1);

	this.timeline.addTween(cjs.Tween.get(this.tiktok_button).wait(1));

	// navigation
	this.instance = new lib.navigation1("synched",0);
	this.instance.setTransform(882,28.1,1,1,0,0,0,882,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button13
	this.let_button = new lib.let_button();
	this.let_button.name = "let_button";
	this.let_button.setTransform(1385.2,51.1,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.let_button, 0, 1, 2, false, new lib.let_button(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgkAkgxAHQgKABgLAAQgbAAgYgIQgegLgYgZQgGgGgFgGQgPgRgIgUQgKgaAAgfQAAgPADgPQACgNAFgMQAIgTANgRQABgBABgBQAFgGAGgGQAYgYAegLQAYgJAbAAQALAAAKACQAxAGAkAkQAHAHAGAHQAVAbAHAiQADAPAAAPg");
	this.shape.setTransform(1385.2,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30B4BB").s().p("AgyCOQgegMgZgYIgLgMQgOgSgJgTQgKgaAAgfQAAgPADgPQADgNAEgMQAIgTANgRIACgCIALgMQAZgZAegKQAYgJAaAAQALAAAKACQAxAGAkAkIANAOQAWAbAGAiQADAPAAAPQAAA+gsAsQgkAkgxAHIgVABQgaAAgYgIg");
	this.shape_1.setTransform(1385.2,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.let_button}]}).wait(1));

	// button12
	this.abbey_button = new lib.abbey_button();
	this.abbey_button.name = "abbey_button";
	this.abbey_button.setTransform(1271.9,51.25,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.abbey_button, 0, 1, 2, false, new lib.abbey_button(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9g");
	this.shape_2.setTransform(1271.9,51.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.abbey_button}]}).wait(1));

	// button11
	this.yellow_button = new lib.yellow_button();
	this.yellow_button.name = "yellow_button";
	this.yellow_button.setTransform(1157.8,51.25,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.yellow_button, 0, 1, 2, false, new lib.yellow_button(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,0,255,0)").ss(1,1,1).p("ACWAAQAAA+gsAsQgrAsg/AAQg+AAgrgsQgsgsAAg+QAAg+AsgrQArgsA+AAQA/AAArAsQAsArAAA+g");
	this.shape_3.setTransform(1157.8,51.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#30B4BB").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA+gsAsQgrAsg/AAQg9AAgsgsg");
	this.shape_4.setTransform(1157.8,51.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.yellow_button}]}).wait(1));

	// button10
	this.white_button = new lib.white_button();
	this.white_button.name = "white_button";
	this.white_button.setTransform(1043.25,52.05,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.white_button, 0, 1, 2, false, new lib.white_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.white_button).wait(1));

	// button9
	this.tour_button = new lib.tour_button();
	this.tour_button.name = "tour_button";
	this.tour_button.setTransform(929.1,51.1,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.tour_button, 0, 1, 2, false, new lib.tour_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tour_button).wait(1));

	// button8
	this.pepper_button = new lib.pepper_button();
	this.pepper_button.name = "pepper_button";
	this.pepper_button.setTransform(816.25,52.2,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.pepper_button, 0, 1, 2, false, new lib.pepper_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pepper_button).wait(1));

	// button7
	this.revolver_button = new lib.revolver_button();
	this.revolver_button.name = "revolver_button";
	this.revolver_button.setTransform(702.4,51.2,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.revolver_button, 0, 1, 2, false, new lib.revolver_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.revolver_button).wait(1));

	// button6
	this.rubber_button = new lib.rubber_button();
	this.rubber_button.name = "rubber_button";
	this.rubber_button.setTransform(588.9,51.2,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.rubber_button, 0, 1, 2, false, new lib.rubber_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rubber_button).wait(1));

	// button5
	this.help_button = new lib.help_button();
	this.help_button.name = "help_button";
	this.help_button.setTransform(475.25,51.1,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.help_button, 0, 1, 2, false, new lib.help_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.help_button).wait(1));

	// button4
	this.sale_button = new lib.sale_button();
	this.sale_button.name = "sale_button";
	this.sale_button.setTransform(361,51.2,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.sale_button, 0, 1, 2, false, new lib.sale_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sale_button).wait(1));

	// button2
	this.with_button = new lib.with_button();
	this.with_button.name = "with_button";
	this.with_button.setTransform(133.9,51.7,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.with_button, 0, 1, 2, false, new lib.with_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.with_button).wait(1));

	// button3
	this.hard_button = new lib.hard_button();
	this.hard_button.name = "hard_button";
	this.hard_button.setTransform(247.95,51.2,1,1,0,0,0,15,15);
	new cjs.ButtonHelper(this.hard_button, 0, 1, 2, false, new lib.hard_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hard_button).wait(1));

	// button1
	this.please_button = new lib.please_button();
	this.please_button.name = "please_button";
	this.please_button.setTransform(20.15,51.65,0.9365,0.9365,0,0,0,15.6,15.6);
	new cjs.ButtonHelper(this.please_button, 0, 1, 2, false, new lib.please_button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.please_button).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(773.5,51.5,773.5,51.5);
// library properties:
lib.properties = {
	id: 'D6DC5DD45A6942419388CE0334E0F48A',
	width: 1547,
	height: 103,
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