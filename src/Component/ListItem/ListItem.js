import React from 'react';
import Item from '../Item/Item'
import PropTypes from 'prop-types'


const ListItem = ({ itemArray }) => {
    
    const handleVision = (name) => alert(`The product name is ${name}`);

    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th scope='col'>Photo</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { itemArray.map((item, key) => (
                        <Item item={item} key={key} handleVision={handleVision} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

ListItem.propTypes = {
    itemArray: PropTypes.array,
};




export default ListItem 