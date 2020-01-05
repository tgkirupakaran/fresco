# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

from PIL import Image
import pytesseract

class TestViewpatta():
  def setup_method(self, method):
    self.driver = webdriver.Firefox()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_viewpatta(self):
    ip_district = 'Thiruvarur'
    ip_taluk = 'Valangaiman'
    ip_village = 'Manalur'
    surveyNo = '218-1A'

    self.driver.get("https://eservices.tn.gov.in/eservicesnew/land/areg.html?lan=en")
    self.driver.set_window_size(1440, 797)
    dropdown = self.driver.find_element(By.NAME, "districtCode")
    dropdown.find_element(By.XPATH, "//option[. = '" + ip_district + "']").click()
    time.sleep(2)
    dropdown = self.driver.find_element(By.NAME, "talukCode")
    # dropdown.find_element(By.XPATH, "//option[. = 'Valangaiman']").click()
    options = dropdown.find_elements_by_xpath(".//*")
    val = ""
    for option in  options:
      if(option.text == ip_taluk):
        val = option.get_attribute('value')
    dropdown.find_element(By.XPATH, "//select[@name='talukCode']/option[@value = '" + val + "']").click()    
    time.sleep(2)
    dropdown = self.driver.find_element(By.NAME, "villageCode")
    dropdown.find_element(By.XPATH, "//option[. = '" + ip_village + "']").click()
    time.sleep(2)
    self.driver.find_element(By.NAME, "surveyNo").click()
    self.driver.find_element(By.NAME, "surveyNo").send_keys(surveyNo.split('-')[0])
    self.driver.find_element(By.NAME, "subdivNo").click()
    time.sleep(2)
    dropdown = self.driver.find_element(By.NAME, "subdivNo")
    dropdown.find_element(By.XPATH, "//option[. = '" + surveyNo.split('-')[1] + "']").click()

    self.driver.save_screenshot("captcha.png")
    textExtract = pytesseract.image_to_string(Image.open('captcha.png'))
    captcha = textExtract.split("Enter authentication value *")[1].split("\n")[2].strip()

    self.driver.find_element(By.NAME, "captcha").send_keys(captcha)
    time.sleep(10)
    # self.driver.find_element(By.CSS_SELECTOR, "#captcha2 > img").click()
    self.driver.find_element(By.CSS_SELECTOR, ".button").click()
    WebDriverWait(self.driver, 20000).until(expected_conditions.presence_of_element_located((By.LINK_TEXT, "Back")))
    self.driver.save_screenshot("patta-for" + surveyNo + ".png")

    self.driver.find_element(By.LINK_TEXT, "Back").click()
    self.driver.close()
  