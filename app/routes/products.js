import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{
            orangeHeader: 'Enterprise',
            grayHeader: 'Edition',
            description: [
                'Magento Enterprise Edition is the high performance, scalable eCommerce solution for fast-growing and large businesses.',
                'It has the enterprise-class features and the flexibility you need to create an eCommerce solution tailored to your unique needs. And it helps you drive more traffic to your store, convert browsers into buyers, and boost online revenue.',
                'See how Magento Enterprise Edition enables you to take full control of your online channel.'
            ],
            highlights: [
                'Flexibility to create rich consumer experiences',
                'Tailor back-end workflows to your business',
                'Hundreds of extensions',
                'Open architecture',
                'Integrate with other eCommerce solutions',
                'Network of partners and certified developers',
                'Expert support, training, and consulting services'
            ],
            callToAction: 'View Features',
            request: 'Request a Free Demo'
        }, {
            orangeHeader: 'Commerce Order Management',
            grayHeader: 'Suite',
            description: [
                'Magento Commerce Order Management is at the core of omnichannel fulfillment. The solution connects all sales and fulfillment channels, gathers information from each and orchestrates the optimal rules and processes for each individual order. This modular, cloud-based suite of tools, services, and technology is designed to manage your orders, inventory, and fulfillment.'
            ],
            highlights: [
                'Omnichannel fulfillment orchestrated and simplified',
                'Global view and management of inventory',
                'Modular, flexible, and integrated',
                'Fast speed to market',
                'Safe and flexible payment options'
            ],
            callToAction: 'Learn More',
            request: 'Talk to a Specialist'
        }, {
            orangeHeader: 'Retail Commerce',
            grayHeader: 'Suite',
            description: [
                'Magento Retail Commerce is a suite of products designed to create engaging and relevant experiences in the retail environment. Magento’s Point-of-Service solution gives store associates a mobile platform to meet every customer expectation. With Magento Retail Commerce you can blur the line between online and offline customer service.'
            ],
            highlights: [
                'In-aisle commerce',
                'Full catalog access',
                'Associate task management',
                'Customer engagement'
            ],
            callToAction: 'Learn More',
            request: 'Talk to a Specialist'
        }, {
            orangeHeader: 'Community',
            grayHeader: 'Edition',
            description: [
                'Magento Community Edition is the perfect solution if you\'re a developer or tech-savvy merchant that wants to explore the flexibility of the Magento eCommerce platform. You can modify—and even contribute to—the core code and engage with our passionate community for support and guidance.',
                'Explore available open source downloads now.'
            ],
            highlights: [
                'Open source eCommerce software',
                'Free to download',
                'Community-based support'
            ],
            callToAction: 'Learn More',
            request: 'View available downloads'
        }];
    }
});
