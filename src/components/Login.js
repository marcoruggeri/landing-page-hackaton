function Login({ onboard, signer, connected, setConnected }) {
  const login = async () => {
    const select = await onboard.walletSelect();
    if (select) {
      const res = await onboard.walletCheck();
      if (res) {
        setConnected(true);
      }
    }
  };

  return (
    <button onClick={login}>
      {connected
        ? signer?.provider?.provider?.selectedAddress.substring(0, 6) +
          "..." +
          signer?.provider?.provider?.selectedAddress.substring(36)
        : "Connect Wallet"}
    </button>
  );
}

export default Login;
