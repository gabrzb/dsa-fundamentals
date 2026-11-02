from pathlib import Path
import unittest


def load_tests(loader, tests, pattern):
    suite = unittest.TestSuite()
    for root in (Path("concepts"), Path("problems")):
        for path in sorted(root.rglob("test_*.py")):
            module = ".".join(path.with_suffix("").parts)
            suite.addTests(loader.loadTestsFromName(module))
    return suite


if __name__ == "__main__":
    unittest.main()
