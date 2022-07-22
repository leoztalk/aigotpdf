describe('window.aigotpdf', function(){
	var expect = chai.expect;
	it('should exist after script inclusion', function () {
		expect(window.aigotpdf).to.be.a('object'); 
	});
	it('should not have a version property', function() {
		expect(window.aigotpdf).not.have.a.property('version');
	});
	it('should not have a getVersion() method', function() {
		expect(window.aigotpdf).itself.not.to.respondTo('getVersion');
	});
	it('should have a getCertificate() method', function() {
		expect(window.aigotpdf).itself.to.respondTo('getCertificate');
	});
	it('should have a sign() method', function() {
		expect(window.aigotpdf).itself.to.respondTo('sign');
	});

	describe('backend selection', function() {
		it('should have use() method', function() {
			expect(window.aigotpdf).itself.to.respondTo('use');
		});
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

