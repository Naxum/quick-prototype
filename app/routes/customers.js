import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            heading: 'Charlotte Tilbury',
            description: 'Cometics Brand is Ready For Its Close Up',
            image: 'customer.jpg'
        }, {
            heading: 'Mara Hoffman',
            description: 'Designing for Creative Freedom & Total Brand Engagement',
            image: 'customer2.jpg'
        }, {
            heading: 'Nestle Health Science NCare',
            description: 'A Platform Revolutionizing Patient Management',
            image: 'customer3.jpg'
        }, {
            heading: 'SureGrip Footware',
            description: 'B2B Flexibility & Scalability Make SureGrip Stand Out',
            image: 'customer4.jpg'
        }, {
            heading: 'Kendra Scott',
            description: 'Great Customer Experiences Sparkle Online and In Store',
            image: 'customer5.jpg'
        }, {
            heading: 'Saraiva',
            description: 'Writing the Next Chapter of Multi-Channel Growth',
            image: 'customer6.jpg'
        }, {
            heading: 'QSL for Burger King Germany',
            description: 'Taste is KING: How Fresh Ingredients Became a Whopper',
            image: 'customer7.jpg'
        }, {
            heading: 'International Military Antiques',
            description: 'Business is Booming for Military Antiques Dealer',
            image: 'customer8.jpg'
        }, {
            heading: 'Braun Hamburg',
            description: 'Storied German Fashion Brand Embraces Responsive',
            image: 'customer9.jpg'
        }];
    }
});
