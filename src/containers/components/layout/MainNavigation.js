
import Nav from 'react-bootstrap/Nav';

function MainNavigation() {
  return (
    

    <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link href="/">Race</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/class">Class</Nav.Link>
        </Nav.Item>
    
    </Nav>
  );
}

export default MainNavigation;