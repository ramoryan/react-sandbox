import Link from 'components/link/Link.jsx'

const Stateless = (props) => (
  <div>
    <h2>Stateless component</h2>
    <p>
      A stateless komponens, mint a nevében is benne van: nem rendelkezik state-el.<br />
      Viszont property-ket ugyanúgy tud fogadni, mint a statefull társai.<br />
      További információkért olvasd el az alábbiakat:<br />
      <Link href="https://rangle-io.gitbooks.io/react-training/content/book/react_components/stateless.html">
        React Training: stateless components
      </Link>
    </p>
  </div>
)

export default Stateless
