import Countries from '../views/countries/Countries.vue'
import CreateCountry from '../views/countries/CreateCountry.vue'
import EditCountry from '../views/countries/EditCountry.vue'
import CountryLayout from '../views/countries/CountryLayout.vue'

const routes = [
    {
        path: '/countries/create',
        name: 'create-country',
        component: CreateCountry
    },
    {
        path: '/countries/:id',
        name: 'country-layout',
        component: CountryLayout,
        children: [
            {
                path: 'edit',
                name: 'edit-country',
                component: EditCountry
            }
        ]
    },
    {
        path: '/countries',
        name: 'countries',
        component: Countries
    }
];

export default routes;
