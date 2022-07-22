describe('window.aigotpdf', function(){
	mocha.ui('bdd');
	var expect = chai.expect;
	var should = chai.should();

	it('should exist after script inclusion', function () {
		expect(window.aigotpdf).to.be.a('object'); 
	});
	it('should not have extra properties', function() {
		var okprops = ["use", "debug", "getCertificate", "sign", "NO_IMPLEMENTATION", "USER_CANCEL", "NOT_ALLOWED", "NO_CERTIFICATES", "TECHNICAL_ERROR", "INVALID_ARGUMENT"].sort();
		var props = Object.keys(window.aigotpdf).sort();
		expect(props).to.have.members(okprops);
	});

	describe('debugging capabilities', function(){
		it('should have debug() method', function() {
			expect(window.aigotpdf).itself.to.respondTo('debug');
		});
		it('should always succeed', function() {
			return window.aigotpdf.debug().should.eventually.be.a('string');
		});
		it('should always contain "aigotpdf"', function() {
			return window.aigotpdf.debug().should.eventually.contain('aigotpdf');
		});
	});

	describe('.getCertificate()', function(){
		it('should be rejected without backend', function(){
			return window.aigotpdf.getCertificate({}).should.be.rejectedWith(Error, window.aigotpdf.NO_IMPLEMENTATION);
		});
	});
	describe('.sign()', function(){
		it('should be rejected without backend', function(){
			return window.aigotpdf.sign({}, {}, {}).should.be.rejectedWith(Error, window.aigotpdf.NO_IMPLEMENTATION);
		});
	});
}); 
