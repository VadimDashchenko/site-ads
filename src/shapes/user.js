import PropTypes from 'prop-types';

const clientShape = PropTypes.shape({
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   password: PropTypes.func.isRequired
});

export default clientShape;