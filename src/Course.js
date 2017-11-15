import React from 'react';
import PropTypes from 'prop-types';


class Course extends React.Component {
    clicker() {
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.sumPrice(active?this.props.price:-this.props.price);
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            active: false
        }
        this.clicker = this.clicker.bind(this);
    }

    render() {
        return (
            <div>
                <p className={this.state.active?'active':''} onClick={this.clicker}>{this.props.name} <strong>${this.props.price}</strong></p>
            </div>
        );
    }
}

Course.defaultProps = {

};

Course.propTypes = {

};

export default Course;
