import React from 'react';
import SEO from './seo';
export default function Landing() {
    return (
        <div>
            <SEO
            title='This will be title!'
            description='This will be description'
            name='This will be name.'
            type='This will be type' />

            {/* rest of the code */}
        </div>
    )
}