import storeService from './store-service';

chai.should();

describe('roStateComponent', () => {

  describe('Service', () => {
    // service specs
    it('has a getState property', () => {
      const service = storeService();
      service.should.have.property('getState');
    });
  });

});
