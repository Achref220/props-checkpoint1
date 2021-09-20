import React from 'react'
import PropTypes from 'prop-types'

const Profile1 = (props) => {
    const styletext = {color: "blue", fontSize: "30px"};
    return <div>
                <h3 style={styletext} onLoad={props.handleName(props.name)}>Full name:</h3>
                {props.name}<br />         
                <h3 style={styletext}>bio:</h3>
                {props.bio}<br />
                <h3 style={styletext}>profession</h3>
                {props.profession}<br />
                {props.children}
            </div>
};

Profile1.defaultProps={
    name:"achref Najeh",
    bio:"default text...",
    profession:"default text...",
    children:"default image"
};
Profile1.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string.isRequired,
    children: PropTypes.string,
}

export default Profile1



