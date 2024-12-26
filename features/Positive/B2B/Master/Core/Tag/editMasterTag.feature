# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@edit
Feature: Mengedit Master Tag

  Scenario: Mengedit Tag di Master Tag
    Given Login B2B berhasil
    And Master
    And Core
    And Tag
    When Saya melihat tampilan semua list Tag
    And Cari data yang diinput sebelumnya di excel
    And Klik datanya
    And Klik Edit
    And Isi Data yang mau dirubah
    Then Klik Save, dan hasil berhasil di edit