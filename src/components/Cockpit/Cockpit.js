import React from 'react';

const cockpit = (props) => {
    let cssClasses = [];
    if (props.persons.length <= 2) {
      cssClasses.push('red');
    }
    if (props.persons.length <= 1) {
      cssClasses.push('bold');
    }

    return(
        <div>
            
          </div>
    );
};

export default cockpit;
