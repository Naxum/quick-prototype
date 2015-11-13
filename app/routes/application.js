import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            mainPage: 'Products',
            link: 'products',
            subpages: [
                'Products Overview',
                'Enterprise Edition',
                'Solutions for B2B',
                'Commerce Order Management',
                'Retail Commerce',
                'Community Edition'
            ]
        }, {
            mainPage: 'Customers',
            link: 'customers',
            subpages: [
                'Success Stories',
                'Client List'
            ]
        }, {
            mainPage: 'Partners',
            //link: 'partners',
            subpages: [
                'Partners Overview',
                'Find a Partner',
                'Partner Portal Login'
            ]
        }, {
            mainPage: 'Resources',
            //link: 'resources',
            subpages: [
                'Business Resources',
                'Technical Resources',
                'PayPal'
            ]
        }, {
            mainPage: 'Training',
            //link: 'training',
            subpages: [
                'Training Overview',
                'Courses',
                'Certification',
                'About'
            ]
        }, {
            mainPage: 'Support',
            //link: 'support',
            subpages: [
                'Documentation',
                'Magento Forums',
                'Enterprise Edition Support',
                'Security Center',
                'Consulting Services'
            ]
        }, {
            mainPage: 'Company',
            //link: 'company',
            subpages: [
                'About Us',
                'Leadership',
                'Careers',
                'Press Room',
                'Events'
            ]
        }, {
            mainPage: 'Blog',
            //link: 'blog',
            subpages: []
        }];
    }
});
