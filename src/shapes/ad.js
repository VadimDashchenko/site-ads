import PropTypes from 'prop-types';

const adShape = PropTypes.shape({
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   authorName: PropTypes.string.isRequired,
   createAtDataTime: PropTypes.string.isRequired
});

export default adShape;