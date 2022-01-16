function Login({ onboard, signer, connected, setConnected, className }) {
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
    <p className={className} onClick={login}>
      {connected
        ? signer?.provider?.provider?.selectedAddress.substring(0, 6) +
          "..." +
          signer?.provider?.provider?.selectedAddress.substring(36)
        : "Connect Wallet"}
    </p>
  );
}

export default Login;
