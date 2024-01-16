import unittest
from exo1 import is_password_valid



class TestPasswordValidation(unittest.TestCase):
    def test_valid_password(self):
        rules = {
            "min_length": 8,
            "min_digits": 1,
            "min_letters": 1,
            "special_chars": "@#$%",
            "additional_rules": [lambda x: x[0].isupper()]
        }
        valid_password = "P@ssw0rd123"
        self.assertTrue(is_password_valid(valid_password, **rules))

    def test_invalid_short_password(self):
        rules = {
            "min_length": 8,
            "min_digits": 1,
            "min_letters": 1,
            "special_chars": "@#$%",
            "additional_rules": [lambda x: x[0].isupper()]
        }
        invalid_password = "P@sw0rd"
        self.assertFalse(is_password_valid(invalid_password, **rules))

    def test_invalid_no_digit_password(self):
        rules = {
            "min_length": 8,
            "min_digits": 1,
            "min_letters": 1,
            "special_chars": "@#$%",
            "additional_rules": [lambda x: x[0].isupper()]
        }
        invalid_password = "PasswordWithoutDigit"
        self.assertFalse(is_password_valid(invalid_password, **rules))

if __name__ == '__main__':
    unittest.main(exit=False)
        

