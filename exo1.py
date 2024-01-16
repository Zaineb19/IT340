def is_password_valid(password, min_length=8, min_digits=1, min_letters=1, special_chars=None, additional_rules=None):
    # Longueur minimale
    if len(password) < min_length:
        return False

    # Nombre minimal de chiffres
    if sum(c.isdigit() for c in password) < min_digits:
        return False

    # Nombre minimal de lettres
    if sum(c.isalpha() for c in password) < min_letters:
        return False

    # Caractères spéciaux
    if special_chars and not any(c in special_chars for c in password):
        return False

    # Règles supplémentaires
    if additional_rules:
        for rule in additional_rules:
            if not rule(password):
                return False

    return True

# Exemple avec règle supplémentaire
password = "P@ssw0rd123"
rules = {
    "min_length": 8,
    "min_digits": 1,
    "min_letters": 1,
    "special_chars": "@#$%",
    "additional_rules": [lambda x: x[0].isupper()]  # Règle supplémentaire: premier caractère en majuscule
}

if is_password_valid(password, **rules):
    print("Mot de passe valide!")
else:
    print("Mot de passe invalide!")
