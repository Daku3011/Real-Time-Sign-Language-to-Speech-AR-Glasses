"""
SSIP - Logging System
Centralized logging configuration for the application.
"""

import logging
import os
import sys
from typing import Optional

# Import config values
try:
    from config import LOG_LEVEL, LOG_FILE, LOG_TO_CONSOLE, LOG_TO_FILE, LOG_FORMAT
except ImportError:
    # Fallback defaults if config not available
    LOG_LEVEL = "INFO"
    LOG_FILE = "logs/app.log"
    LOG_TO_CONSOLE = True
    LOG_TO_FILE = True
    LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'


def setup_logger(name: str, level: Optional[str] = None) -> logging.Logger:
    """
    Setup and return a configured logger.
    
    Args:
        name: Name of the logger (usually __name__)
        level: Optional logging level override
    
    Returns:
        Configured logger instance
    """
    logger = logging.getLogger(name)
    
    # Set level
    log_level = level if level else LOG_LEVEL
    logger.setLevel(getattr(logging, log_level.upper()))
    
    # Prevent duplicate handlers if logger already configured
    if logger.handlers:
        return logger
    
    # Create formatter
    formatter = logging.Formatter(LOG_FORMAT)
    
    # Console handler
    if LOG_TO_CONSOLE:
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(logging.INFO)
        console_handler.setFormatter(formatter)
        logger.addHandler(console_handler)
    
    # File handler
    if LOG_TO_FILE:
        try:
            # Create logs directory if it doesn't exist
            os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
            
            file_handler = logging.FileHandler(LOG_FILE)
            file_handler.setLevel(logging.DEBUG)
            file_handler.setFormatter(formatter)
            logger.addHandler(file_handler)
        except Exception as e:
            # If file logging fails, at least log to console
            print(f"Warning: Could not setup file logging: {e}")
    
    return logger


# Create a default logger for this module
logger = setup_logger(__name__)
