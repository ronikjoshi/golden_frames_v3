export const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 ratio
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    overflowWrap: 'break-word',   // ✅ prevents layout breaking
    wordBreak: 'break-word',      // ✅ ensures long text wraps
  },

  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },

  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    flexWrap: 'wrap',            // ✅ ensure tags wrap too
  },

  title: {
    padding: '0 16px',
    wordBreak: 'break-word',     // ✅ ensures title wraps
  },

  message: {
    whiteSpace: 'pre-wrap',      // ✅ preserves spacing & wraps
    overflowWrap: 'anywhere',    // ✅ forces wrap anywhere if needed
    wordBreak: 'break-word',
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};