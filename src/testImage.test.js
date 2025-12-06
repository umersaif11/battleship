import logo from './logo.jpeg'; // Only works if fileTransformer is set up
import styles from './styles.css'; // Only works if identity-obj-proxy is set up

test('Jest handles assets correctly', () => {
  // fileTransformer returns the filename, not the binary data
  expect(logo).toBe('logo.jpeg'); 
  
  // identity-obj-proxy allows reading class names
  // (styles.container returns "container")
  expect(styles.container).toBe('container'); 
});