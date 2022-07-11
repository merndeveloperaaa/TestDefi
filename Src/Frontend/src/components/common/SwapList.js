import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';



export default function SwapListComponent() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <span className='btn action-btn'>Buy PET</span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "left top"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://www.hotbit.io/exchange?symbol=PEACE_USDT") }}>Hotbit</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://p2pb2b.io/trade/PET_USDT/") }}>p2pb2b</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://coinsbit.io/trade_classic/PET_USDT") }}>coinsbit</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://www.cointiger.com/en-us/#/trade_center?coin=pet_usdt") }}>cointiger.com</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://www.koinbazar.com/trade/PET-USDT") }}>koinbazar.com</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://m.indoex.io/orderbookmobile/PET_USDT") }}>m.indoex.io</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://m.indoex.io/orderbookmobile/PET_BNB") }}>m.indoex.io</span></MenuItem>
                  <MenuItem onClick={handleClose}><span onClick={() => { window.open("https://pancakeswap.finance/swap?outputCurrency=0x9CA00f0B5562914bcD84Ca6e0132CaE295cc84B7") }}>pancakeswap.finance</span></MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>

  );
}
