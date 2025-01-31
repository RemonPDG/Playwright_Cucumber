# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah012
Feature: Negative Menambah Master Tag (tambah.tag.012)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi data hanya di remarks saja
    Given Login B2B berhasil - 012
    And Pergi ke menu Master - 012
    And Pergi ke menu Core - 012
    And Pergi ke menu Tag - 012
    When Muncul list tag - 012
    And Klik Create New - 012
    And Mengisi data hanya di remarks saja - 012
    Then Klik Save, data tidak berhasil disimpan - 012