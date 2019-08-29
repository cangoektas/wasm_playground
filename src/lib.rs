#[no_mangle]
pub extern "C" fn add_i8(a: i8, b: i8) -> i8 {
    a + b
}

#[no_mangle]
pub extern "C" fn add_i16(a: i16, b: i16) -> i16 {
    a + b
}

#[no_mangle]
pub extern "C" fn add_i32(a: i32, b: i32) -> i32 {
    a + b
}
