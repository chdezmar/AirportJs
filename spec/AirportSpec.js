'use strict';

describe('Airport', function(){
	var airport;
	var plane;

	beforeEach(function() {
		airport = new Airport();
		plane = jasmine.createSpy('plane');
	});

	it('has an empty array of planes',function() {
		expect(airport.planes()).toEqual([])
	});

	it('can clear planes for landing', function(){
		airport.clearForLanding(plane);
		expect(airport.planes()).toEqual([plane]);
	});

	it('can clear planes for takeoff', function(){
		airport.clearForLanding(plane);
		airport.clearForTakeoff(plane);
		expect(airport.planes()).toEqual([]);
	});
});
